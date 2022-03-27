import { splitDate } from "@/assets/utils"
import { getterTree, getAccessorType } from "typed-vuex"
import type { Channel, Video, Videos } from "@/types/Video"

interface StateTree {
  channelsRef: Partial<Channel>[]
  videosRef: { [key: string]: Video[] }
}

export const state: () => StateTree = () => ({
  channelsRef: [
    { name: "jdh", subs: 150000 },
    { name: "Fireship", subs: 1200000 },
    { name: "iPhonedo", subs: 620000 },
    { name: "TheOdd1sOut", subs: 17500000 }
  ],

  videosRef: {
    jdh: [
      {
        id: "BwRWgIRW4Ls",
        title: "Building my indie game: one month of progress",
        publishedAt: "2022-03-18T16:34:10Z",
      },
      {
        id: "9krM2dtE-6s",
        title: "Building the new 3D engine for my game",
        publishedAt: "2022-02-08T16:48:16Z"
      },
      {
        id: "vaGZapAGvwM",
        title: "I built my own computer. by hand.",
        publishedAt: "2021-12-07T16:22:07Z"
      },
      {
        id: "OW1EmG7b4DU",
        title: "I built my own graphics card",
        publishedAt: "2021-08-29T15:18:31Z"
      }
    ],

    Fireship: [
      {
        id: "j_I9nkpovCQ",
        title: "I use Arch on an M1 MacBook, btw",
        publishedAt: "2022-03-26T18:31:48Z"
      },
      {
        id: "MFhxShGxHWc",
        title: "Binary Search Algorithm in 100 Seconds",
        publishedAt: "2022-03-23T15:17:06Z"
      },
      {
        id: "qXUl3VsbA6o",
        title: "10 very promising Open Source Projects you haven’t heard of",
        publishedAt: "2022-03-21T15:40:17Z"
      },
      {
        id: "iMVgvkVJuDI",
        title: "Time… a programmer's worst enemy // The Code Report",
        publishedAt: "2022-03-17T16:24:34Z"
      }
    ],

    iPhonedo: [
      {
        id: "dHleuvlcTsE",
        title: "Like a Jaguar | Green iPhone 13",
        publishedAt: "2022-03-23T13:00:38Z"
      },
      {
        id: "H3CkWd4fgbs",
        title: "Mac Studio M1 Ultra In Depth Review And Comparisons",
        publishedAt: "2022-03-17T13:00:37Z"
      },
      {
        id: "us9NVTGCTPo",
        title: "Let's Talk About Apple's March 8 Event: M1 Ultra, Mac Studio, Studio Display, iPhone SE and more!",
        publishedAt: "2022-03-09T01:43:04Z"
      },
      {
        id: "OhKFcDCdlW0",
        title: "How To Get Rid Of Oily Fingerprints On Your Phone [Restoring Oleophobic Coating]",
        publishedAt: "2022-03-02T15:00:14Z"
      }
    ],

    TheOdd1sOut: [
      {
        id: "RILI90ZIu3A",
        title: "How to Find Inspiration",
        publishedAt: "2022-02-05T17:03:08Z"
      },
      {
        id: "3hw_y9hI_js",
        title: "What Your Early Twenties Will Be Like",
        publishedAt: "2021-10-30T17:32:59Z"
      },
      {
        id: "R84W2hbmaKk",
        title: "The Truth About Making Cartoons",
        publishedAt: "2021-09-04T16:40:12Z"
      },
      {
        id: "BxWw8AO4ZmI",
        title: "My Girlfriend is Kinda Odd",
        publishedAt: "2021-06-27T16:05:13Z"
      }
    ]
  }
})

export const getters = getterTree(state, {
  channel: (state) => (url: string): Channel => {
    const channel = <Channel>state.channelsRef.find((channel) => channel.name === url.replace(/\-/g, " "))
    return {
      ...channel,
      url: channel.name.replace(/\s/g, "-"),
      avatar: `/avatars/${channel.name.toLowerCase().replace(/\s/g, "-")}.png`,
      banner: `/banners/${channel.name.toLowerCase().replace(/\s/g, "-")}.png`
    }
  },

  channels: (state, getters): Channel[] => (
    state.channelsRef.map((channel) => getters.channel((<string>channel.name).replace(/\-/g, " ")))
  ),

  unsortedVideos: (state, getters): Video[] => {
    const array: Video[] = []
    Object.entries(state.videosRef).forEach(([channel, videos]) => {
      return videos.map((video) => ({
        ...video, channel: getters.channel(channel)
      })).forEach((video) => array.push(video))
    })

    return array
  },

  sortedVideos: (_, getters): Video[] => getters.unsortedVideos.sort((a: Video, b: Video) => (a.publishedAt < b.publishedAt) ? 1 : -1),
  groupedVideos: (_, getters): Videos => {
    return getters.sortedVideos.reduce((reduced: Videos, value: Video & { channel: Channel }) => {
      (reduced[value.channel.name] = reduced[value.channel.name] || []).push(value)
      return reduced
    }, {})
  },

  groupedVideosByDate: (_, getters): Videos => {
    return getters.sortedVideos.reduce((reduced: Videos, value: Video & { channel: Channel }) => {
      (reduced[splitDate(new Date(value.publishedAt))] = reduced[splitDate(new Date(value.publishedAt))] || []).push(value)
      return reduced
    }, {})
  }
})

export const accessorType = getAccessorType({ state })