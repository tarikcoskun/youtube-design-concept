<script lang="ts">
import Vue from "vue"
import { playlists } from "@/assets/utils"

export default Vue.extend({
  data() {
    return { playlist: playlists.find((list) => list.id === this.$route.query.list) }
  }
})
</script>

<template>
  <section class="content" id="playlist">
    <aside class="sidebar">
      <SmartImage class="thumbnail" cover />
      <h1>{{ playlist.name }}</h1>
    </aside>

    <aside class="videos-container">

    </aside>
  </section>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

section.content#playlist {
  @include flex(flex-start);
  @include mobile { flex-direction: column-reverse }

  > aside {
    padding: 24px;

    &.sidebar {
      position: sticky; top: 0;
      height: calc(100vh - 65px);
      border-right: 1px solid var(--gray);

      figure.thumbnail {
        width: 100%; aspect-ratio: 16/9;
        @include mobile { border-radius: 0 !important }
      }
    }
  }
}
</style>