<script lang="ts">
import Vue from "vue"
import { playlists } from "@/assets/utils"

export default Vue.extend({
  data() {
    const playlist = playlists.find((list) => list.id === this.$route.query.list)
    return { playlist }
  },

  watch: {
    $route() { this.playlist = playlists.find((list) => list.id === this.$route.query.list)  }
  }
})
</script>

<template>
  <aside class="content" id="playlist">
    <aside class="sidebar">
      <header>
        <SmartImage class="thumbnail" :src="`https://i.ytimg.com/vi/${playlist.videos[0].id}/hqdefault.jpg`" cover />

        <aside>
          <h1>{{ playlist.name }}</h1>
          <sub>
            <span>{{ playlist.videos.length }} videos</span>
            <span>No views</span>
            <span>Updated today</span>
          </sub>
        </aside>
      </header>

      <footer>
        <button class="action"><Icon name="shuffle" /></button>
        <button class="action"><Icon name="edit" /></button>
      </footer>
    </aside>

    <aside class="container">
      <button class="action play"><Icon name="play" /></button>
      <Video :video="video" v-for="(video, index) in playlist.videos" :key="index" />
    </aside>
  </aside>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

aside.content#playlist {
  @include flex(flex-start);
  @include mobile { flex-direction: column }

  > aside {
    &.sidebar {
      padding: 24px;
      position: sticky; top: 0;
      border-right: 1px solid var(--gray);
      width: 348px; height: calc(100vh - var(--nav-height));

      @include mobile {
        padding: 16px;
        position: unset;
        width: 100%; height: unset;
        border: none; background: var(--gray)
      }

      header {
        @include flex($dir: column, $gap: 16px);

        figure.thumbnail {
          overflow: hidden;
          position: relative;
          width: 100%; aspect-ratio: 16/8.9;
          @include mobile { display: none }

          &::after {
            content: "PLAY ALL";
            width: 100%;
            padding: 12px 0;
            color: var(--bg);
            font-weight: 500;
            text-align: center;
            background: #000000cf;
            backdrop-filter: blur(4px);
            position: absolute; bottom: 0; left: 0; right: 0;
          }
        }

        aside {
          h1 { font-size: 24px }
          sub span {
            font-size: 14px;
            color: var(--icon);

            &:not(:last-child)::after {
              content: "•";
              padding-left: 4px;
            }
          }
        }
      }

      footer {
        @include flex;
        margin: 16px 0 0 -8px
      }
    }

    &.container {
      flex-grow: 1;
      position: relative;
      @include flex($dir: column);
      @include mobile { padding-top: 36px }

      button.play {
        display: none;
        padding: 16px;
        background: var(--red);
        position: absolute; top: -28px; right: 16px;
        @include mobile { display: flex }
        svg path { fill: white }
      }

      a.video {
        padding: 16px;
        flex-direction: row;
        &:hover { background: var(--hover) }
        @include mobile { @include grid(2, 12px) }

        figure.thumbnail { flex: 0 0 128px }
        footer {
          @include mobile { padding: 0 }
          a.channel, aside sub span.date { display: none }
        }
      }
    }
  }
}
</style>