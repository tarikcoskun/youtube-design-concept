<script lang="ts" setup>
import { videos } from "@/utils"
import Video from "@/components/Video.vue";
</script>

<template>
  <main>
    <section class="home-page">
      <section class="watch-later">
        <label>WATCH LATER</label>
        <div class="videos">
          <Video v-for="video in videos.slice(8, 12)" :video="video" />
        </div>
      </section>

      <section class="home-content">
        <div class="container">
          <div class="videos">
            <Video v-for="video in videos" :video="video" />
          </div>
        </div>
      </section>
    </section>
  </main>
</template>