<script lang="ts">
import Vue from "vue"
import { videos } from "@/assets/utils"

export default Vue.extend({
  data: () => ({ videos })
})
</script>

<template>
  <aside class="content" id="library">
    <section class="history">
      <NuxtLink to="/library/history"><Icon name="history" /> <h1>History</h1></NuxtLink>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos.slice(0, 4)" :key="index" />
      </section>
    </section>

    <section class="playlists">
      <NuxtLink to="/library/playlist"><Icon name="playlist" /> <h1>Playlists</h1></NuxtLink>

      <p>Playlists you create or save will show up here.</p>
    </section>

    <section class="watch-later">
      <NuxtLink to="/librar/playlist?list=WL"><Icon name="watch-later" /> <h1>Watch later</h1></NuxtLink>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos.slice(8, 12)" :key="index" />
      </section>
    </section>

    <section class="liked-videos">
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

  > section {
    padding: 24px;
    @include mobile { padding: 16px }
    @include flex($dir: column, $gap: 16px);

    > a {
      width: fit-content;
      @include flex($gap: 8px);
      svg path { fill: var(--fg) }
      h1 { font-size: 20px; font-weight: 500 }
    }

    section.videos {
      @include grid(4, $mb: 1);
      @include mobile { gap: 12px }

      a.video {
        footer a.channel { display: none }

        @include mobile {
          @include grid(2);

          footer {
            padding: 0;
            aside sub span.date { display: none }
          }
        }
      }
    }
  }
}
</style>