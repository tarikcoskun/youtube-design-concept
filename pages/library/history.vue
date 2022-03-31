<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    videos() { return this.$accessor.unsortedVideos }
  }
})
</script>

<template>
  <section class="content">
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
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";

section.content {
  @include flex(flex-start);

  aside {
    padding: 24px;

    &.videos-container {
      > h1 { padding-bottom: 16px; font-size: 20px; font-weight: 600 }
      section.videos { @include grid(3); }
    }

    &.sidebar {
      background: var(--bg);
      position: sticky; top: 49px;
      border-left: 1px solid var(--gray);
      height: calc(100vh - 65px - 49px - 32px);
      @include flex($dir: column, $gap: 16px);

      figure.search {
        padding: 4px 4px;
        margin-bottom: 8px;
        border-radius: 4px;
        background: var(--gray);
        transition: 150ms background, 150ms box-shadow;
        @include flex(center);

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

        &:hover { background: var(--hover) }
        &:focus { box-shadow: 0 1px 4px var(--shadow) }
      }
    }
  }
}
</style>