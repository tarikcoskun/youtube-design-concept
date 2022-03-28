<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    videos() { return this.$accessor.groupedVideosByDate }
  }
})
</script>

<template>
  <aside class="content" id="subscriptions">
    <section class="videos-container" v-for="([date, videos], index) in Object.entries(videos)" :key="index">
      <h1>{{ date }}</h1>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos" :key="index" />
      </section>
    </section>
  </aside>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

aside.content#subscriptions {
  section.videos-container {
    padding: 24px;
    @include mobile { padding: 0 }

    > h1 {
      padding-bottom: 16px; font-size: 20px; font-weight: 600;
      @include mobile { display: none }
    }

    section.videos {
      @include grid(5, $mb: 1);
      @include mobile { gap: 0 }

      a.video footer {
        h1 { font-size: 14px; @include mobile { font-size: unset } }
        aside a.channel figure.image {
          display: none;
          @include mobile { display: block }
        }
      }
    }
  }
}
</style>