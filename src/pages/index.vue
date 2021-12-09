<script lang="ts" setup>
import { ref, watchEffect } from "vue"
import { videos, getReadableDate } from "@/utils"

const activeTab = ref<HTMLElement>()
const subscribed = ref<Boolean>(true)

watchEffect(() => {
  document.querySelectorAll("a.tab")?.forEach((tab: Element) => tab.classList.remove("active"))
  activeTab.value?.classList.add("active")

  console.log(`Set tab to: ${activeTab.value?.innerText}`)
})
</script>

<template>
  <main>
    <section class="channel-view">
      <figure class="banner"></figure>

      <section class="channel-info">
        <img class="avatar" src="/avdan.png" alt="Avatar" draggable="false">
        <div class="sub-info">
          <aside class="left">
            <h1 class="name">Avdan</h1>
            <p class="subscribers">100,000 subscribers</p>
          </aside>

          <a class="button subscribe" :style="{ background: subscribed ? 'var(--button)': 'red', color: subscribed ? 'var(--title)': 'white' }" @click="subscribed = !subscribed">{{ subscribed ? "SUBSCRIBED": 'SUBSCRIBE' }}</a>
        </div>
      </section>

      <section class="tabs" @click="($event.target as HTMLElement).tagName === 'A' && (activeTab = $event.target as HTMLElement)">
        <a class="tab active">HOME</a>
        <a class="tab">VIDEOS</a>
        <a class="tab">PLAYLISTS</a>
        <a class="tab">COMMUNITY</a>
        <a class="tab">CHANNELS</a>
        <a class="tab">ABOUT</a>
        <a class="tab search"><i class="material-icons-outlined">search</i></a>
      </section>

      <section class="videos" v-if="activeTab?.innerText === 'VIDEOS'">
        <aside class="season">
          <label>Uploads</label>
          <div class="videos">
            <a v-for="video in videos" class="video" :href="`https://youtu.be/${video.id}`" target="_blank">
              <img class="thumbnail" :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`" alt="thumbnail" draggable="false">
              <div class="details">
                <h1 class="title" :title="video.title">{{ video.title }}</h1>
                <span class="views">{{ getReadableDate(video.publishedAt as unknown as Date) }}</span>
              </div>
            </a>
          </div>
        </aside>
      </section>

      <section class="playlists" v-else-if="activeTab?.innerText === 'PLAYLISTS'">
        <aside class="season">
          <label>Playlists</label>
        </aside>
      </section>

      <section class="community" v-else-if="activeTab?.innerText === 'COMMUNITY'">
        <aside class="season">
          <label>Community</label>
        </aside>
      </section>

      <section class="playlists" v-else-if="activeTab?.innerText === 'CHANNELS'">
        <aside class="season">
          <label>Channels</label>
        </aside>
      </section>

      <section class="playlists" v-else-if="activeTab?.innerText === 'ABOUT'">
        <aside class="season">
          <label>About</label>
        </aside>
      </section>

      <section class="home" v-else>
        <aside class="season">
          <label>Season 3</label>
          <div class="videos">
            <a v-for="video in videos" class="video" :href="`https://youtu.be/${video.id}`" target="_blank">
              <img class="thumbnail" :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`" alt="thumbnail" draggable="false">
              <div class="details">
                <h1 class="title" :title="video.title">{{ video.title }}</h1>
                <span class="views">{{ getReadableDate(video.publishedAt as unknown as Date) }}</span>
              </div>
            </a>
          </div>
        </aside>
      </section>
    </section>
  </main>
</template>
