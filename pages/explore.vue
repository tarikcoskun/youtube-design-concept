<script lang="ts">
import Vue from "vue"
import { getReadableDate } from "@/assets/utils"

export default Vue.extend({
  methods: { getReadableDate },

  computed: {
    videos() { return this.$accessor.unsortedVideos },
    channel() { return this.$accessor.channel("jdh") },
    groupedVideos() { return this.$accessor.groupedVideos }
  }
})
</script>

<template>
  <aside class="content" id="explore">
    <section class="tags">
      <button><Icon name="trending" /> <h1>Trending</h1></button>
      <button><Icon name="music" /> <h1>Music</h1></button>
      <button><Icon name="gaming" /> <h1>Gaming</h1></button>
      <button><Icon name="sports" /> <h1>Sports</h1></button>
      <button><Icon name="news" /> <h1>News</h1></button>
    </section>

    <section class="recommended-channel">
      <header>
        <NuxtLink :to="`/channel/${channel.url}`" class="channel">
          <SmartImage :src="channel.avatar" width="36" height="36" radius="rounded" />
          <h1>{{ channel.name }} <span>Recommended channel for you</span></h1>
        </NuxtLink>
        <button class="subscribe">Subscribe</button>
      </header>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in groupedVideos[channel.name]" :key="index" />
      </section>
    </section>

    <section class="videos-container">
      <h1>Trending Videos</h1>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos" :key="index" />
      </section>
    </section>
  </aside>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

aside.content#explore {
  section {
    &.tags {
      padding: 16px;
      @include grid(5, $gap: 12px);

      button {
        padding: 16px;
        cursor: pointer;
        border-radius: 8px;
        border: 1px solid var(--gray);
        @include flex(center, $dir: column, $gap: 12px);

        svg {
          width: 32px;
          &.trending path { fill: var(--red) }
          &.music path { fill: #22c55e }
          &.gaming * { fill: #14b8a6 }
          &.sports path { fill: #f59e0b }
          &.news path { fill: #ef4444 }
        }

        h1 { color: var(--icon); font-size: 18px; font-weight: 500 }
        &:hover { background: var(--gray) }
      }
    }

    &.recommended-channel {
      padding: 16px;
      @include flex($dir: column, $gap: 16px);

      header {
        @include flex(center, space-between);

        a.channel {
          @include flex(center, $gap: 16px);

          h1 {
            @include flex(flex-end, $gap: 8px);
            font-size: 20px; font-weight: 600; line-height: 20px;
            span { color: var(--icon); font-size: 14px; font-weight: 500 }
          }
        }

        button.subscribe {
          color: white;
          cursor: pointer;
          font-weight: 500;
          padding: 10px 20px;
          border-radius: 9999px;
          background: var(--red);
        }
      }

      section.videos { @include grid(4) }
    }

    &.videos-container {
      padding: 16px;

      > h1 { padding-bottom: 16px; font-size: 20px; font-weight: 600 }
      section.videos { @include grid(4) }
    }
  }
}
</style>