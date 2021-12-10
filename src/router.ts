import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/index.vue"
import Watch from "@/pages/watch.vue"
import NotFound from "@/pages/404.vue"
import Explore from "@/pages/explore.vue"
import Channel from "@/pages/channel.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/explore",
    name: "explore",
    component: Explore
  },
  {
    path: "/channel",
    alias: "/c",
    name: "channel",
    component: Channel
  },
  {
    path: "/watch",
    name: "watch",
    props: true,
    component: Watch
  },
  {
    path: "/dummypath",
    name: "literally any other path",
    component: NotFound
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
