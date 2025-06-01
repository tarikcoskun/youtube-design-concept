import type { NuxtConfig } from "@nuxt/types"
import type { ModuleOptions as ImageOptions } from "@nuxt/image"

const ImageConfig: Partial<ImageOptions> = { domains: ["i.ytimg.com"] }

const Config: NuxtConfig = {
  target: "static",
  router: {
    base: "/youtube-design-concept/"
  },
  dir: { static: "public" },
  loading: { color: "#d93025" },

  head: {
    title: "YouTube Concept",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "A modern YouTube concept" }
    ],

    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },

  components: true,
  css: ["@/assets/css/main"],
  buildModules: ["@nuxt/typescript-build", ["@nuxt/image", ImageConfig]]
}

export default Config