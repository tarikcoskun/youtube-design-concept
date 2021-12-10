<script lang="ts" setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import Youtube from "@/components/YouTube.vue"

let sidebar = ref<Boolean>(true)
let search = ref<HTMLInputElement>()

let isWatchPage = ref<Boolean>(false)
let floatingSidebar = ref<Boolean>(false)

const route = useRoute()
watch(route, () => {
  isWatchPage.value = route.path === "/watch"
  if (route.path === "/watch") floatingSidebar.value = true
  else floatingSidebar.value = false
}, { deep: true })

function toggleSidebar() {
  if (isWatchPage.value) {
    floatingSidebar.value = !floatingSidebar.value
    let main = document.querySelector("main")
    let sidebar = document.querySelector("header.sidebar-floating")

    if (sidebar?.classList.contains("sidebar-open")) {

      main?.classList.remove("sidebar-open")
      sidebar?.classList.remove("sidebar-open")
    }
    else {
      main?.classList.add("sidebar-open")
      sidebar?.classList.add("sidebar-open")
    }
  }

  else sidebar.value = !sidebar.value
}
</script>

<template>
  <div>
    <header class="navigation">
      <aside class="brand">
        <i class="material-icons-outlined action-icon menu" @click="toggleSidebar">menu</i>
        <Youtube class="action-icon pc-logo" @click="$router.push('/')" width="100" />
        <img class="action-icon mobile-logo" src="/favicon.png" @click="$router.push('/')">
      </aside>

      <aside class="search" @click="search?.focus()">
        <i class="material-icons-outlined">search</i>
        <input ref="search" type="text" placeholder="Search">
        <img class="mobile-avatar" src="/me.png" width="32" draggable="false">
      </aside>

      <aside class="links">
        <i class="material-icons-outlined action-icon">apps</i>
        <i class="material-icons-outlined action-icon">notifications</i>
        <img class="action-icon" src="/me.png" width="32" draggable="false">
      </aside>
    </header>

    <header :class="[ sidebar ? 'sidebar': 'sidebar sidebar-compact', isWatchPage ? 'sidebar-floating': '' ]">
      <a href="#" class="button create-video" v-if="sidebar">
        <i class="material-icons-outlined">video_call</i> Create
      </a>

      <aside class="links">
        <router-link class="create" to="/dummypath" v-if="!sidebar">
          <i class="material-icons-outlined">video_call</i> Create
        </router-link>
        <router-link class="home" to="/">
          <i class="material-icons-outlined">home</i> Home
        </router-link>
        <router-link class="explore" to="/explore">
          <i class="material-icons-outlined">explore</i> Explore
        </router-link>
        <router-link class="history" to="/dummypath">
          <i class="material-icons-outlined">history</i> History
        </router-link>
        <router-link class="subscriptions" to="/dummypath">
          <i class="material-icons-outlined">subscriptions</i> Subscriptions
        </router-link>
        <router-link class="library" to="/dummypath">
          <i class="material-icons-outlined">video_library</i> Library
        </router-link>
      </aside>

      <aside class="subscriptions">
        <label>SUBSCRIPTIONS</label>
        <router-link to="/c?name=Avdan">
          <img src="/avdan.png" draggable="false"> Avdan
        </router-link>
        <router-link to="/c?name=Fireship">
          <img src="/fireship.png" draggable="false"> Fireship
        </router-link>
      </aside>
    </header>

    <router-view v-slot="{ Component }">
      <component :is="Component" :class="[ sidebar ? 'sidebar' : 'sidebar-compact', isWatchPage ? 'watch-page': 'default-page' ]" />
    </router-view>
  </div>
</template>