<script lang="ts" setup>
import { ref } from "vue"
import Youtube from "@/icons/YouTube.vue"

const sidebar = ref<Boolean>(true)
const search = ref<HTMLInputElement>()
</script>

<template>
  <div>
    <header class="navigation">
      <aside class="brand">
        <i class="material-icons-outlined action-icon" @click="sidebar = !sidebar">menu</i>
        <Youtube class="action-icon" @click="$router.push('/')" width="100" />
      </aside>

      <aside class="search" @click="search?.focus()">
        <i class="material-icons-outlined">search</i>
        <input ref="search" type="text" placeholder="Search">
      </aside>

      <aside class="links">
        <i class="material-icons-outlined action-icon">apps</i>
        <i class="material-icons-outlined action-icon">notifications</i>
        <img class="action-icon" src="/avdan.png" width="32" draggable="false">
      </aside>
    </header>

    <header :class="[ sidebar ? 'sidebar': 'sidebar sidebar-compact' ]">
      <a href="#" class="button create-video" v-if="sidebar">
        <i class="material-icons-outlined">video_call</i> Create
      </a>

      <aside class="links">
        <router-link class="create" to="/" v-if="!sidebar">
          <i class="material-icons-outlined">video_call</i> Create
        </router-link>
        <router-link class="home" to="/">
          <i class="material-icons-outlined">home</i> Home
        </router-link>
        <router-link class="explore" to="/">
          <i class="material-icons-outlined">explore</i> Explore
        </router-link>
        <router-link class="history" to="/">
          <i class="material-icons-outlined">history</i> History
        </router-link>
        <router-link class="watch-later" to="/">
          <i class="material-icons-outlined">watch_later</i> Watch later
        </router-link>
        <router-link class="subscriptions" to="/">
          <i class="material-icons-outlined">subscriptions</i> Subscriptions
        </router-link>
        <router-link class="library" to="/">
          <i class="material-icons-outlined">video_library</i> Library
        </router-link>
      </aside>

      <aside class="subscriptions">
        <label>SUBCRIPTIONS</label>
        <a href="https://youtube.com/Avdan" target="_blank">
          <img src="/avdan.png" draggable="false"> Avdan
        </a>
        <a href="https://youtube.com/PewDiePie" target="_blank">
          <img src="/pewdiepie.png" draggable="false"> PewDiePie
        </a>
        <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
          <img src="/rickastley.png" draggable="false"> Rick Astley
        </a>
        <a href="https://youtube.com/LinusTechTips" target="_blank">
          <img src="/linustechtips.png" draggable="false"> Linus Tech Tips
        </a>
      </aside>
    </header>

    <router-view v-slot="{ Component }">
      <component :is="Component" :class="[ sidebar ? 'sidebar' : 'sidebar-compact' ]" />
    </router-view>
  </div>
</template>