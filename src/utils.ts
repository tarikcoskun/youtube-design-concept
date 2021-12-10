import moment from "moment"

export interface Video {
  id:          string
  title:       string
  publisher:   string
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

export const videos = {
  Avdan: [
    {
      publisher: "Avdan",
      id: "zjbJNpl-TXU",
      title: "Coming soon: AvdanOS Concept",
      publishedAt: "2021-11-28T12:00:00Z"
    },
    {
      publisher: "Avdan",
      id: "Q1Q_zUlDHlE",
      title: "The New Avdan",
      publishedAt: "2021-07-11T13:00:00Z"
    },
    {
      publisher: "Avdan",
      id: "OtwHJwP-juo",
      title: "If Microsoft Designed macOS (Concept)",
      "publishedAt": "2021-05-14T12:00:00Z"
    },
    {
      publisher: "Avdan",
      id: "zaPLOb0pWZU",
      title: "I Answered Your Questions!",
      publishedAt: "2021-03-04T17:00:00Z"
    },
    {
      publisher: "Avdan",
      id: "wC5lBQiXooE",
      title: "iPadOS 15 Concept",
      publishedAt: "2021-02-19T17:00:00Z"
    },
    {
      publisher: "Avdan",
      id: "ox2PD1BqNfw",
      title: "Android 12 Concept",
      publishedAt: "2020-11-24T18:00:00Z"
    },
    {
      publisher: "Avdan",
      id: "trFqVk-m0NY",
      title: "Windows 7 2020 Edition (Concept)",
      publishedAt: "2020-09-07T13:00:00Z"
    },
    {
      publisher: "Avdan",
      id: "Rp37n-cLYLQ",
      title: "Re-imagining Spotify Mobile Experience (Concept by Avdan)",
      publishedAt: "2020-07-27T17:00:00Z"
    }
  ],
  Fireship: [
    {
      publisher: "Fireship",
      id: "nhBVL41-_Cw",
      title: "Vue.js in 100 Seconds",
      publishedAt: "2020-04-03T21:00:00Z"
    },
    {
      publisher: "Fireship",
      id: "akDIJa0AP5c",
      title: "Sass in 100 Seconds",
      publishedAt: "2021-04-26T21:00:00Z"
    },
    {
      publisher: "Fireship",
      id: "emFMHH2Bfvo",
      title: "SVG in 100 Seconds",
      publishedAt: "2021-03-23T21:00:00Z"
    },
    {
      publisher: "Fireship",
      id: "zQnBQ4tB3ZA",
      title: "TypeScript in 100 Seconds",
      publishedAt: "2020-11-24T21:00:00Z"
    },
    {
      publisher: "Fireship",
      id: "Tn6-PIqc4UM",
      title: "React in 100 Seconds",
      publishedAt: "2020-09-07T21:00:00Z"
    },
    {
      publisher: "Fireship",
      id: "ok-plXXHlWw",
      title: "HTML in 100 Seconds",
      publishedAt: "2021-12-02T21:00:00Z"
    }
  ]
}