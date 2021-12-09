<script lang="ts" setup>
import { ref, watchEffect } from "vue"
import { videos, getReadableDate } from "@/utils"

const activeTag = ref<HTMLElement>()

watchEffect(() => {
  document.querySelectorAll("a.tag")?.forEach((tab: Element) => tab.classList.remove("active"))
  activeTag.value?.classList.add("active")
})
</script>

<template>
  <main>
    <section class="homepage">
      <section class="tags" @click="($event.target as HTMLElement).tagName === 'A' && (activeTag = $event.target as HTMLElement)">
        <a class="tag active">All</a>
        <a class="tag">Music</a>
        <a class="tag">Movies</a>
        <a class="tag">Trailers</a>
        <a class="tag">Gaming</a>
        <a class="tag">Website</a>
        <a class="tag">Computers</a>
        <a class="tag">Avdan</a>
        <a class="tag">iPhonedo</a>
        <a class="tag">Fireship</a>
      </section>

      <section class="allvideos">
      <aside class="container">
        <div class="videos">
          <a v-for="video in videos" class="video" :href="`https://youtu.be/${video.id}`" target="_blank">
            <img class="thumbnail" :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` " alt="thumbnail" draggable="false">
            <div class="details">
              <h1 class="title" :title="video.title">{{ video.title }}</h1>
              <footer class="bottom">
                <div class="creator-details">
                  <img class="avatar" :src="`/${video.avatar}.png`" :alt="video.publisher">
                  <h1 class="name">{{ video.publisher }}</h1>
                </div>
                <span class="dot">•</span>
                <span class="views">{{ getReadableDate(video.publishedAt as unknown as Date) }}</span>
              </footer>
            </div>
          </a>
        </div>
      </aside>
    </section>
    </section>
  </main>
</template>