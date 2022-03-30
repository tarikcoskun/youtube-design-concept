export interface Video {
  id:          string
  title:       string
  publishedAt: string
}

export interface Channel {
  url:    string
  name:   string
  subs:   number
  avatar: string
  banner: string
}

export type Videos = { [key: string]: (Video & { channel: Channel })[] }