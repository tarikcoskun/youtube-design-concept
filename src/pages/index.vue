<script lang="ts" setup>
import { videos, getReadableDate } from "@/utils"
</script>

<template>
  <main>
    <section class="home-page">
      <section class="home-content">
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