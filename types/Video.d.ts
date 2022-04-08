export interface Video {
  id:          string
  title:       string
  publishedAt: string
  channel:     Channel
}

export interface Channel {
  id:     string
  name:   string
  subs:   number
  avatar: string
  banner: string
}