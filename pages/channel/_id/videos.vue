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
  <section id="videos">
    <h1>Uploads</h1>

    <section class="videos">
      <Video :video="video" v-for="(video, index) in videos" :key="index" />
    </section>
  </section>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

section#videos {
  padding: 24px;
  @include mobile { padding: 16px }

  > h1 { padding-bottom: 16px; font-size: 20px; font-weight: 500 }

  section.videos {
    @include grid(4, $mb: 1);
    @include mobile { gap: 16px }

    a.video {
      footer a.channel { display: none }
      @include mobile {
        @include grid(2);
        footer { padding: 0 }
      }
    }
  }
}
</style>