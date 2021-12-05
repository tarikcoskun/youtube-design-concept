<script lang="ts" setup>
import { ref } from "vue"
import Menu from "@/icons/Menu.vue"
import Apps from "@/icons/Apps.vue"
import Home from "@/icons/Home.vue"
import Search from "@/icons/Search.vue"
import Youtube from "@/icons/YouTube.vue"
import Library from "@/icons/Library.vue"
import History from "@/icons/History.vue"
import Explore from "@/icons/Explore.vue"
import WatchLater from "@/icons/WatchLater.vue"
import CreateVideo from "@/icons/CreateVideo.vue"
import Notifications from "@/icons/Notifications.vue"
import Subscriptions from "@/icons/Subscriptions.vue"

const sidebar = ref<Boolean>(true);
const search = ref<HTMLInputElement | null>(null);
</script>

<template>
  <div>
    <header class="navigation">
      <aside class="brand">
        <Menu class="action-icon" width="32" @click="sidebar = !sidebar" />
        <Youtube width="100" />
      </aside>

      <aside class="search" @click="search?.focus()">
        <Search width="24" />
        <input ref="search" type="text" placeholder="Search">
      </aside>

      <aside class="links">
        <Apps class="action-icon" width="32" />
        <Notifications class="action-icon" width="32" />
        <img class="action-icon" src="/avdan.png" width="32" draggable="false">
      </aside>
    </header>

    <header :class="[ sidebar ? 'sidebar': 'sidebar sidebar-compact' ]">
      <a href="#" class="button create-video" v-if="sidebar"><CreateVideo width="32" /> Create</a>
      <aside class="links">
        <router-link class="create" to="/" v-if="!sidebar"><CreateVideo /> Create</router-link>
        <router-link class="home" to="/"><Home /> Home</router-link>
        <router-link class="explore" to="/"><Explore /> Explore</router-link>
        <router-link class="history" to="/"><History /> History</router-link>
        <router-link class="watch-later" to="/"><WatchLater /> Watch later</router-link>
        <router-link class="subscriptions" to="/"><Subscriptions /> Subscriptions</router-link>
        <router-link class="library" to="/"><Library /> Library</router-link>

        <div class="subscriptions">
          <label>SUBCRIPTIONS</label>
          <a href="https://youtube.com/Avdan" target="_blank"><img src="/avdan.png" draggable="false"> Avdan</a>
          <a href="https://youtube.com/PewDiePie" target="_blank"><img src="/pewdiepie.png" draggable="false"> PewDiePie</a>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank"><img src="/rickastley.png" draggable="false"> Rick Astley</a>
          <a href="https://youtube.com/LinusTechTips" target="_blank"><img src="/linustechtips.png" draggable="false"> Linus Tech Tips</a>
        </div>
      </aside>
    </header>

    <router-view v-slot="{ Component }">
      <component :is="Component" :class="[ sidebar ? 'sidebar' : 'sidebar-compact' ]" />
    </router-view>
  </div>
</template>
