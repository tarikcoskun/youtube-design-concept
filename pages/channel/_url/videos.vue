<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    videos() {
      return this.$accessor.groupedVideos[this.$route.params.url]
    }
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

  > h1 { padding-bottom: 16px; font-size: 20px; font-weight: 600 }
  section.videos {
    @include grid(4);
    a.video footer aside a.channel { display: none }
  }
}
</style>