<script lang="ts">
import Vue from "vue"
import { videos } from "@/assets/utils"

export default Vue.extend({
  data: () => ({ videos })
})
</script>

<template>
  <aside class="content" id="history">
    <aside class="videos-container">
      <h1>History</h1>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos" :key="index" />
      </section>
    </aside>

    <aside class="sidebar">
      <figure class="search">
        <button class="action"><Icon name="search" /></button>
        <input type="text" placeholder="Search watch history" />
      </figure>
      <button><Icon name="trash" /> <h1>Clear all watch history</h1></button>
      <button><Icon name="pause" /> <h1>Pause watch history</h1></button>
      <button><Icon name="settings" /> <h1>Manage all history</h1></button>
    </aside>
  </aside>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

aside.content#history {
  @include flex(flex-start);
  @include mobile { flex-direction: column-reverse }

  > aside {
    padding: 24px;
    @include mobile { padding: 16px }

    &.videos-container {
      > h1 { padding-bottom: 16px; font-size: 20px; font-weight: 600 }
      section.videos {
        @include grid(3, $mb: 1);
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

    &.sidebar {
      position: sticky; top: 0;
      height: calc(100vh - 65px);
      border-left: 1px solid var(--gray);
      @include flex($dir: column, $gap: 16px);
      @include mobile { height: unset; padding: 0; width: 100%; position: unset; border: none }

      figure.search {
        padding: 4px 4px;
        border-radius: 4px;
        background: var(--gray);
        transition: 150ms background, 150ms box-shadow;
        @include flex(center);
        @include mobile { border-radius: 0 }

        input {
          flex-grow: 1;
          padding: 8px;
          font-size: 16px;
          background: transparent;
          &:focus { outline: none }
        }

        &:focus-within {
          background: white;
          box-shadow: 0 1px 4px var(--shadow);
          svg path, input, input::placeholder { fill: #5f6368; color: #5f6368 }
        }
      }

      > button {
        padding: 8px;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid var(--gray);
        transition: 150ms background, 150ms box-shadow;
        @include flex(center, $gap: 20px);
        @include mobile { display: none }

        &:hover { background: var(--hover) }
        &:focus { box-shadow: 0 1px 4px var(--shadow) }
      }
    }
  }
}
</style>