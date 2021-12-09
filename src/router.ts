import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/index.vue"
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
    path: "/dummypath",
    name: "literally any other path",
    component: Home
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
