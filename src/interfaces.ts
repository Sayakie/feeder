interface DiscordEmbed {
  title?: string
  type?: 'rich'
  description?: string
  url?: string
  timestamp?: number | string
  color?: number
  footer?: unknown // TODO
  fields?: Array<{
    name: string
    value: string
    inline: false
  }>
}

interface SlackBlock {
  type: 'section' | 'mkdown'
  block_id?: string
  text: SlackBlock
  accessory?: {
    type: 'image'
    image_url: string
    alt_text: string
  }
  fields?: Array<SlackBlock>
}

interface WebhookForm {}
export interface DiscordWebhookForm extends WebhookForm {
  content?: string
  username?: string
  avatar_url?: string
  tts?: boolean
  embeds?: Array<DiscordEmbed>
  payload_json?: 'multipart/form-data'
  allowed_mentions?: Array<unknown> // TODO
}
export interface SlackWebhookForm extends WebhookForm {
  text: string
  blocks?: Array<SlackBlock>
}

export interface Wrapper<T> {
  data: T
}

export interface PersonalRecentPost {
  _id: string
  _class: string
  title: string
  description: string
  link: string
  author: string
  date: string
  tags: Array<string>
  count: number
  postImage: string
}

export interface CommunityRecentPost {
  _id: string
  _class: string
  title: string
  description: string
  link: string
  author: string
  date: string
  count: number
  imgUrl: string
}

export interface VelogTrendingPost {
  title: string
  likes: number
  user: {
    username: string
  }
  url_slug: string
  comments_count: string
  is_private: boolean
}
