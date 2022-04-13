<script lang="ts">
import Vue from "vue"
import { videos } from "@/assets/utils"

export default Vue.extend({
  data: () => ({ videos })
})
</script>

<template>
  <aside class="content" id="history">
    <aside class="container">
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

    &.container {
      section.videos {
        @include grid(3, $mb: 1);
        @include mobile { gap: 16px }

        a.video {
          footer a.channel { display: none }

          @include mobile {
            @include grid(2, 12px);

            footer {
              padding: 0;
              aside sub span.date { display: none }
            }
          }
        }
      }
    }

    &.sidebar {
      position: sticky; top: 0;
      border-left: 1px solid var(--gray);
      height: calc(100vh - var(--nav-height));
      @include flex($dir: column, $gap: 16px);
      @include mobile { height: auto; padding: 0; width: 100%; position: unset; border: none }

      figure.search {
        padding: 2px 0;
        border-bottom: 2px solid var(--icon);
        @include flex(center);
        @include mobile { background: var(--gray); border: none; border-radius: 0 }

        input {
          flex-grow: 1;
          padding: 10px;
          font-size: 16px;
          background: transparent;
          &:focus { outline: none }
        }

        &:focus-within {
          svg path, input, input::placeholder { fill: #5f6368; color: #5f6368 }
        }
      }

      > button {
        padding: 10px;
        cursor: pointer;
        border-radius: 6px;
        border: 1px solid var(--gray);
        @include flex(center, $gap: 16px);
        @include mobile { display: none }
        h1 { color: var(--icon); font-weight: 500 }

        &:hover {
          background: var(--bg-red); border-color: var(--bg-red);
          h1 { color: var(--red) }
          svg path { fill: var(--red) }
        }
      }
    }
  }
}
</style>