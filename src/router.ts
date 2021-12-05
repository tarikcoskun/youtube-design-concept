import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: Home
  }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
