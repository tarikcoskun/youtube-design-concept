export interface Video {
  id:          string
  title:       string
  publishedAt: string
}

export interface Channel {
  id:     string
  name:   string
  subs:   number
  avatar: string
  banner: string
}

export type Videos = { [key: string]: VideoChannel[] }
export type VideoChannel = Video & { channel: Channel }