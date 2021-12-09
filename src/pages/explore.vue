<script lang="ts" setup>
import { ref, watchEffect } from "vue"
import { videos, getReadableDate } from "@/utils"

const activeTag = ref<HTMLElement>()

watchEffect(() => {
  document.querySelectorAll("a.tag")?.forEach((tab: Element) => tab.classList.remove("active"))
  activeTag.value?.classList.add("active")
})

const featured = [
  {
    name: "Avdan",
    avatar: "avdan-alt"
  },
  {
    name: "iPhonedo",
    avatar: "iphonedo"
  }
]
</script>

<template>
  <main>
    <section class="explore-page">
      <section class="tags">
        <label>EXPLORE</label>
        <div class="container" @click="($event.target as HTMLElement).tagName === 'A' && (activeTag = $event.target as HTMLElement)">
          <a class="tag active">All</a>
          <a class="tag" v-for="tag in ['Music', 'Piano', 'Movies', 'Trailers', 'Gaming', 'Website', 'Computers', 'Avdan', 'iPhonedo', 'Fireship']">{{ tag }}</a>
        </div>
      </section>

      <section class="featured-creators">
        <label>TODAY'S FEATURED CREATORS</label>
        <div class="container">
          <figure class="channel-info" v-for="creator in featured">
            <img class="avatar" :src="`/${creator.avatar}.png`" draggable="false">
            <div class="sub-info">
              <aside class="left">
                <h1 class="name">{{ creator.name }}</h1>
                <p class="subscribers">195K subs</p>
              </aside>
              <a class="button subscribe">SUBSCRIBE</a>
            </div>
          </figure>
        </div>
      </section>

      <section class="explore-content">
        <label>POPULAR VIDEOS</label>
        <div class="container">
          <div class="videos">
            <a v-for="video in videos" class="video" :href="`https://youtu.be/${video.id}`" target="_blank">
              <img class="thumbnail" :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` " alt="thumbnail" draggable="false">
              <div class="details">
                <h1 class="title" :title="video.title">{{ video.title }}</h1>
                <footer class="bottom">
                  <router-link to="/c" class="creator-details">
                    <img class="avatar" :src="`/${video.avatar}.png`" :alt="video.publisher">
                    <h1 class="name">{{ video.publisher }}</h1>
                  </router-link>
                  <span class="dot">•</span>
                  <span class="views">{{ getReadableDate(video.publishedAt as unknown as Date) }}</span>
                </footer>
              </div>
            </a>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>