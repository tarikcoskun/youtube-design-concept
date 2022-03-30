<script lang="ts">
import Vue from "vue"

export default Vue.extend({
})
</script>

<template>
  <aside class="content">
    <header>
      <aside class="tabs">
        <NuxtLink to="/library/history">History</NuxtLink>
        <NuxtLink to="/library/playlists">Playlists</NuxtLink>
        <NuxtLink to="/library/playlists?list=WL">Watch later</NuxtLink>
        <NuxtLink to="/library/playlists?list=LV">Liked videos</NuxtLink>
      </aside>

      <aside class="info">
        <h1>Subscriptions: 128</h1>
        <h1>Likes: 360</h1>
        <h1>Uploads: 0</h1>
      </aside>
    </header>

    <NuxtChild />
  </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";

aside.content {
  header {
    padding: 0 24px;
    background: var(--bg);
    position: sticky; top: 0;
    border-bottom: 1px solid var(--gray);
    @include flex(center, space-between);

    aside {
      &.tabs {
        @include flex;

        a {
          font-weight: 500;
          padding: 14px 24px;
          position: relative;

          &::after {
            content: "";
            height: 3px;
            background: transparent;
            transition: 150ms background;
            position: absolute; bottom: 0; left: 0; right: 0;
          }

          &.nuxt-link-exact-active::after { background: var(--red) }
        }
      }

      &.info {
        @include flex($gap: 16px);

        h1 {
          color: var(--icon);
          &:not(:last-child) {
            padding-right: 16px;
            border-right: 1px solid var(--gray)
          }
        }
      }
    }
  }
}
</style>