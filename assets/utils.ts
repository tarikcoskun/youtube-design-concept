import moment from "moment"
import type { Video, Channel } from "@/types/Video"

export const getReadableDate = (date: Date): string => {
  const now = moment()
  const createdAt = moment(date)
  const diff = now.diff(createdAt, "days")

  if (diff === 0) return "Today"
  else if (diff === 1) return "Yesterday"
  else if (diff <= 30) return `${diff} days ago`
  else if (diff >= 30 && diff < 365) return `${Math.floor(diff / 30)} month${Math.floor(diff / 30) > 1 ? "s": ""} ago`
  else return `${Math.floor(diff / 365)} year${Math.floor(diff / 365) > 1 ? "s": ""} ago`
}

export const splitDate = (date: Date): string => {
  const now = moment()
  const createdAt = moment(date)
  const diff = now.diff(createdAt, "days")

  if (diff === 0) return "Today"
  else if (diff > 0 && diff <= 7) return "This week"
  else if (diff > 7 && diff <= 30) return "This month"
  else if (diff > 30 && diff <= 365) return "This year"
  else return `${Math.floor(diff / 365)} year${Math.floor(diff / 365) > 1 ? "s": ""} ago`
}

export const findChannel = (name: string): Channel => {
  const channel = <Channel>channelsRef.find((channel) => channel.name === name.replace(/\-/g, " "))
  const id = channel.name.replace(/\s/g, "-")
  return {
    ...channel, id,
    avatar: `/avatars/${name.toLowerCase()}.png`,
    banner: `/banners/${name.toLowerCase()}.png`
  }
}

const channelsRef = [
  { name: "jdh", subs: 150000 },
  { name: "Fireship", subs: 1200000 },
  { name: "iPhonedo", subs: 620000 },
  { name: "TheOdd1sOut", subs: 17500000 }
]

export const channels = channelsRef.map((channel) => findChannel((channel.name).replace(/\-/g, " ")))

export const videos: Video[] = [
  {
    id: "BwRWgIRW4Ls",
    title: "Building my indie game: one month of progress",
    publishedAt: "2022-03-18T16:34:10Z",
    channel: findChannel("jdh")
  },
  {
    id: "9krM2dtE-6s",
    title: "Building the new 3D engine for my game",
    publishedAt: "2022-02-08T16:48:16Z",
    channel: findChannel("jdh")
  },
  {
    id: "vaGZapAGvwM",
    title: "I built my own computer. by hand.",
    publishedAt: "2021-12-07T16:22:07Z",
    channel: findChannel("jdh")
  },
  {
    id: "OW1EmG7b4DU",
    title: "I built my own graphics card",
    publishedAt: "2021-08-29T15:18:31Z",
    channel: findChannel("jdh")
  },
  {
    id: "j_I9nkpovCQ",
    title: "I use Arch on an M1 MacBook, btw",
    publishedAt: "2022-03-26T18:31:48Z",
    channel: findChannel("Fireship")
  },
  {
    id: "MFhxShGxHWc",
    title: "Binary Search Algorithm in 100 Seconds",
    publishedAt: "2022-03-23T15:17:06Z",
    channel: findChannel("Fireship")
  },
  {
    id: "qXUl3VsbA6o",
    title: "10 very promising Open Source Projects you haven’t heard of",
    publishedAt: "2022-03-21T15:40:17Z",
    channel: findChannel("Fireship")
  },
  {
    id: "iMVgvkVJuDI",
    title: "Time… a programmer's worst enemy // The Code Report",
    publishedAt: "2022-03-17T16:24:34Z",
    channel: findChannel("Fireship")
  },
  {
    id: "dHleuvlcTsE",
    title: "Like a Jaguar | Green iPhone 13",
    publishedAt: "2022-03-23T13:00:38Z",
    channel: findChannel("iPhonedo")
  },
  {
    id: "H3CkWd4fgbs",
    title: "Mac Studio M1 Ultra In Depth Review And Comparisons",
    publishedAt: "2022-03-17T13:00:37Z",
    channel: findChannel("iPhonedo")
  },
  {
    id: "us9NVTGCTPo",
    title: "Let's Talk About Apple's March 8 Event: M1 Ultra, Mac Studio, Studio Display, iPhone SE and more!",
    publishedAt: "2022-03-09T01:43:04Z",
    channel: findChannel("iPhonedo")
  },
  {
    id: "OhKFcDCdlW0",
    title: "How To Get Rid Of Oily Fingerprints On Your Phone [Restoring Oleophobic Coating]",
    publishedAt: "2022-03-02T15:00:14Z",
    channel: findChannel("iPhonedo")
  },
  {
    id: "RILI90ZIu3A",
    title: "How to Find Inspiration",
    publishedAt: "2022-02-05T17:03:08Z",
    channel: findChannel("TheOdd1sOut")
  },
  {
    id: "3hw_y9hI_js",
    title: "What Your Early Twenties Will Be Like",
    publishedAt: "2021-10-30T17:32:59Z",
    channel: findChannel("TheOdd1sOut")
  },
  {
    id: "R84W2hbmaKk",
    title: "The Truth About Making Cartoons",
    publishedAt: "2021-09-04T16:40:12Z",
    channel: findChannel("TheOdd1sOut")
  },
  {
    id: "BxWw8AO4ZmI",
    title: "My Girlfriend is Kinda Odd",
    publishedAt: "2021-06-27T16:05:13Z",
    channel: findChannel("TheOdd1sOut")
  }
].sort((a: Video, b: Video) => (a.publishedAt < b.publishedAt) ? 1 : -1)

export const groupedVideos = videos.reduce((reduced: {[key: string]: Video[]}, video: Video) => {
  (reduced[video.channel.name] = reduced[video.channel.name] || []).push(video)
  return reduced
}, {})

export const playlists = [
  {
    id: "WL",
    name: "Watch later",
    videos: groupedVideos["Fireship"]
  },
  {
    id: "LV",
    name: "Liked videos",
    videos: groupedVideos["TheOdd1sOut"]
  }
]