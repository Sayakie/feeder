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
  console.error(err)
  workflows.setFailed(err)

  return ''
}

/** @deprecated */
const escapeMarkdown = (s: string) => s.replace(/([^\d\s\w가-힣])/g, '\\$1')

const personalRecentPosts = await useAxios()
  .get<PersonalRecentPost[]>(
    '/korean/people/feeds?sort=date.desc&page=1&size=7'
  )
  .then(onFetch)
  .then(data =>
    data.reduce((prev, cur) => `${prev}[${cur.title}](${cur.link})\n`, '')
  )
  .catch(onError)

const communityRecentPosts = await useAxios()
  .get<CommunityRecentPost[]>(
    '/korean/teams/feeds?sort=date.desc&page=1&size=5'
  )
  .then(onFetch)
  .then(data =>
    data.reduce((prev, cur) => `${prev}[${cur.title}](${cur.link})\n`, '')
  )
  .catch(onError)

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
            { name: '개인 피드', value: personalRecentPosts, inline: false },
            { name: '단체 피드', value: communityRecentPosts, inline: false }
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
