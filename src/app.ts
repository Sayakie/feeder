import * as workflows from '@actions/core'
import axios from 'axios'
import { WEBHOOK_TYPE } from './enums'
import { assert } from './lib/assert'
import type { AxiosResponse } from 'axios'
import type {
  CommunityRecentPost,
  DiscordWebhookForm,
  PersonalRecentPost,
  SlackWebhookForm,
  VelogTrendingPost,
  Wrapper
} from './interfaces'
import { useAxios } from './lib/useAxios'

const { WEBHOOKS: rawWebhooks } = process.env
if (rawWebhooks == null || rawWebhooks == undefined)
  throw new ReferenceError('❌ Could not find webhook list!')
const Webhooks = rawWebhooks.trim().replace(/\s+/, '').split(',')
let message: DiscordWebhookForm | SlackWebhookForm

const onFetch = <T>(raw: AxiosResponse<T>) =>
  (<Wrapper<T>>(<unknown>raw.data)).data
const onError = (err: Error) => {
  console.dir(err)
  workflows.setFailed(err)

  return ''
}

const AwesomeDevBlog = useAxios('https://awesome-devblog.netlify.app/api')
const Velog = useAxios('https://v2.velog.io')

const personalRecentPosts = await AwesomeDevBlog.get<PersonalRecentPost[]>(
  '/korean/people/feeds?sort=date.desc&page=1&size=7'
)
  .then(onFetch)
  .then(data =>
    data.reduce((prev, cur) => `${prev}[${cur.title}](${cur.link})\n`, '')
  )
  .catch(onError)

const communityRecentPosts = await AwesomeDevBlog.get<CommunityRecentPost[]>(
  '/korean/teams/feeds?sort=date.desc&page=1&size=5'
)
  .then(onFetch)
  .then(data =>
    data.reduce((prev, cur) => `${prev}[${cur.title}](${cur.link})\n`, '')
  )
  .catch(onError)

const velogTrendingPosts = await Velog.post<{
  trendingPosts: VelogTrendingPost[]
}>('/graphql', {
  operationName: 'TrendingPosts',
  query: `query TrendingPosts($limit: Int, $offset: Int, $timeframe: String) {
    trendingPosts(limit: $limit, offset: $offset, timeframe: $timeframe) {
      title
      likes
      user {
        username
      }
      url_slug
      comments_count
      is_private
    }
  }
  `,
  variables: { limit: 5, offset: 0 }
})
  .then(onFetch)
  .then(data => data.trendingPosts)
  .then(data =>
    data.reduce(
      (prev, cur) =>
        `${prev}[${cur.title}](https://velog.io/@${cur.user.username}/${cur.url_slug})\n`,
      ''
    )
  )
  .catch(onError)

console.log(velogTrendingPosts)

// Sends to webhooks
Webhooks.map(async hookUrl => {
  if (hookUrl.includes(WEBHOOK_TYPE.DISCORD)) {
    assert<DiscordWebhookForm>(message)

    message = {
      username: 'Haru',
      avatar_url:
        'https://cdn.discordapp.com/avatars/247351691077222401/efe6009e69c1fcd2d3601a452cdf7e1e.png?size=128',
      embeds: [
        {
          color: 9166827,
          fields: [
            {
              name: ':newspaper: 개인 피드',
              value: personalRecentPosts,
              inline: false
            },
            {
              name: ':newspaper: 단체 피드',
              value: communityRecentPosts,
              inline: false
            },
            {
              name: ':newspaper: 트렌드 포스트 / 벨로그',
              value: velogTrendingPosts,
              inline: false
            }
          ]
        }
      ]
    }
  } else if (hookUrl.includes(WEBHOOK_TYPE.SLACK)) {
    assert<SlackWebhookForm>(message)
  } else {
    console.log('')
  }

  await axios.post(hookUrl, message).catch(console.error)
})
