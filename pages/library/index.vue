<script lang="ts">
import Vue from "vue"
import { videos } from "@/assets/utils"

export default Vue.extend({
  data: () => ({ videos })
})
</script>

<template>
  <aside class="content" id="library">
    <section class="history container">
      <NuxtLink to="/library/history"><Icon name="history" /> <h1>History</h1></NuxtLink>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos.slice(0, 4)" :key="index" />
      </section>
    </section>

    <section class="container">
      <NuxtLink to="/library/playlist"><Icon name="playlist" /> <h1>Playlists</h1></NuxtLink>

      <p>Playlists you create or save will show up here.</p>
    </section>

    <section class="container">
      <NuxtLink to="/library/playlist?list=WL"><Icon name="watch-later" /> <h1>Watch later</h1></NuxtLink>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos.slice(8, 12)" :key="index" />
      </section>
    </section>

    <section class="container">
      <NuxtLink to="/library/playlist?list=LV"><Icon name="like" /> <h1>Liked videos</h1></NuxtLink>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos.slice(12, 16)" :key="index" />
      </section>
    </section>
  </aside>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

aside.content#library {
  @include flex($dir: column);

  section.container {
    @include flex($dir: column, $gap: 16px);

    > a {
      @include flex($gap: 8px);
      svg path { fill: var(--fg) }
      h1 { font-size: 20px; font-weight: 500 }
    }

    section.videos {
      @include grid(4);
      @include breakpoint {
        margin: 0 -16px; padding: 0 16px;
        @include flex($gap: 16px); overflow-x: auto;
        &::-webkit-scrollbar { display: none }
      }

      @include breakpoint(min, 1920px) { @include grid(5) }
      @include breakpoint(min, 2250px) { @include grid(6) }

      a.video {
        @include breakpoint { flex: 0 0 44%; gap: 16px }
        footer {
          padding: 0;
          a.channel, span.date { display: none }
        }
      }
    }

    &:not(.history) :is(section.videos, p) {
      @include breakpoint { display: none }
    }
  }
}
</style>