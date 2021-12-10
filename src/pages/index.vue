<script lang="ts" setup>
import { videos } from "@/utils"
import Video from "@/components/Video.vue";
</script>

<template>
  <main>
    <section class="home-page">
      <section class="watch-later">
        <label>EXPLORE</label>
        <div class="videos">
          <Video v-for="video in videos['Fireship']" :video="video" />
        </div>
      </section>

      <section class="home-content">
        <div class="container">
          <div class="videos">
            <Video v-for="video in [...videos['Avdan'], ...videos['Fireship']]" :video="video" />
          </div>
        </div>
      </section>
    </section>
  </main>
</template>