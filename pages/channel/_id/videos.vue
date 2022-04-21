<script lang="ts">
import Vue from "vue"
import { groupedVideos } from "@/assets/utils"

export default Vue.extend({
  data() {
    const videos = groupedVideos[this.$route.params.id]
    return { videos }
  }
})
</script>

<template>
  <section class="container" id="videos">
    <h1>Uploads</h1>

    <section class="videos">
      <Video :video="video" v-for="(video, index) in videos" :key="index" />
    </section>
  </section>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

section#videos {
  section.videos {
    @include grid(4, $mb: 1);
    @include breakpoint { gap: 16px }
    @include breakpoint(min, 1920px) { @include grid(5) }
    @include breakpoint(min, 2250px) { @include grid(6) }

    a.video {
      footer a.channel { display: none }
      @include breakpoint {
        @include grid(2);
        footer { padding: 0 }
      }
    }
  }
}
</style>