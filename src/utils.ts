import moment from "moment"

interface Video {
  id:          string
  title:       string
  publishedAt: string
}

export function getReadableDate(date: Date): string {
  const now = moment()
  const createdAt = moment(date)
  const diff = now.diff(createdAt, "days")

  if (diff === 0) return "Today"
  else if (diff === 1) return "Yesterday"
  else if (diff <= 30) return `${diff} days ago`
  else if (diff >= 30 && diff < 365) return `${Math.floor(diff / 30)} months ago`
  else return `${Math.floor(diff / 365)} year${Math.floor(diff / 365) > 1 ? 's': ''} ago`
}

export const videos: Video[] = [
  {
    "id": "zjbJNpl-TXU",
    "title": "Coming soon: AvdanOS Concept",
    "publishedAt": "2021-11-28T12:53:05Z"
  },
  {
    "id": "Q1Q_zUlDHlE",
    "title": "The New Avdan",
    "publishedAt": "2021-07-11T13:31:40Z"
  },
  {
    "id": "OtwHJwP-juo",
    "title": "If Microsoft Designed macOS (Concept)",
    "publishedAt": "2021-05-14T12:00:25Z"
  },
  {
    "id": "zaPLOb0pWZU",
    "title": "I Answered Your Questions!",
    "publishedAt": "2021-03-04T17:02:54Z"
  },
  {
    "id": "wC5lBQiXooE",
    "title": "iPadOS 15 Concept",
    "publishedAt": "2021-02-19T17:52:03Z"
  },
  {
    "id": "ox2PD1BqNfw",
    "title": "Android 12 Concept",
    "publishedAt": "2020-11-24T18:18:43Z"
  },
  {
    "id": "trFqVk-m0NY",
    "title": "Windows 7 2020 Edition (Concept)",
    "publishedAt": "2020-09-07T13:32:27Z"
  },
  {
    "id": "Rp37n-cLYLQ",
    "title": "Re-imagining Spotify Mobile Experience (Concept by Avdan)",
    "publishedAt": "2020-07-27T17:46:23Z"
  }
]