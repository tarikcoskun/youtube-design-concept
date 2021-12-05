<script lang="ts" setup>
import { ref } from "vue"
import { videos, getReadableDate } from "@/utils"

const subscribed = ref<Boolean>(true)
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
            <p class="sub-count">100,000 subscribers</p>
          </aside>

          <a class="button subscribe" :style="{ background: subscribed ? 'var(--button)': 'red', color: subscribed ? 'var(--title-primary)': 'white' }" @click="subscribed = !subscribed">{{ subscribed ? "SUBSCRIBED": 'SUBSCRIBE' }}</a>
        </div>
      </section>

      <section class="tabs">
        <a class="tab active">HOME</a>
        <a class="tab">VIDEOS</a>
        <a class="tab">PLAYLISTS</a>
        <a class="tab">COMMUNITY</a>
        <a class="tab">CHANNELS</a>
        <a class="tab">ABOUT</a>
        <a class="tab search"><i class="material-icons-outlined">search</i></a>
      </section>

      <section class="home">
        <aside class="season">
          <label>Latest uploads</label>
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
