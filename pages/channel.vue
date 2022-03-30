<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  computed: {
    channel() {
      return this.$accessor.channel(this.$route.params.url)
    }
  }
})
</script>

<template>
  <aside class="content">
    <section class="channel">
      <SmartImage class="banner" :src="channel.banner" height="180" cover />
      <footer>
        <aside class="information">
          <SmartImage :src="channel.avatar" width="80" height="80" radius="rounded" />
          <footer>
            <h1>{{ channel.name }}</h1>
            <span>{{ Intl.NumberFormat("en-US", { notation: "compact" }).format(channel.subs) }} subscribers</span>
          </footer>
        </aside>

        <aside class="subscribe">
          <button class="subscribe">Subscribe</button>
          <Icon name="notifications" action />
        </aside>
      </footer>
    </section>

    <section class="tabs">
      <NuxtLink :to="`/channel/${channel.url}`">Home</NuxtLink>
      <NuxtLink :to="`/channel/${channel.url}/videos`">Videos</NuxtLink>
      <NuxtLink :to="`/channel/${channel.url}/playlists`">Playlists</NuxtLink>
      <NuxtLink :to="`/channel/${channel.url}/community`">Community</NuxtLink>
      <NuxtLink :to="`/channel/${channel.url}/channels`">Channels</NuxtLink>
      <NuxtLink :to="`/channel/${channel.url}/about`">About</NuxtLink>
    </section>

    <NuxtChild />
  </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";

aside.content {
  section {
    &.channel {
      > footer {
        padding: 24px 32px;
        @include mobile { padding: 16px }
        @include flex(center, space-between);

        aside {
          @include flex(center, $gap: 16px);

          &.information footer {
            @include flex($dir: column, $gap: 4px);

            h1 { font-size: 24px; font-weight: 600 }
            span { color: var(--icon) }
          }
        }
      }
    }

    &.tabs {
      @include flex;
      padding: 0 32px;
      overflow-x: auto;
      background: var(--bg);
      position: sticky; top: 0;
      border-bottom: 1px solid var(--gray);
      @include mobile { padding: 0 }

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

      &::-webkit-scrollbar { display: none }
    }
  }
}
</style>