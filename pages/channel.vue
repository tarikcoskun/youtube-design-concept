<script lang="ts">
import Vue from "vue"
import { findChannel } from "@/assets/utils"

export default Vue.extend({
  data() {
    const channel = findChannel(this.$route.params.id)
    return { channel }
  },

  watch: {
    $route() { this.channel = findChannel(this.$route.params.id) }
  }
})
</script>

<template>
  <aside class="content" id="channel">
    <section class="channel">
      <SmartImage class="banner" :src="channel.banner" height="180" cover />

      <footer>
        <aside class="information">
          <SmartImage :src="channel.avatar" width="80" height="80" radius="rounded" />
          <aside>
            <h1>{{ channel.name }}</h1>
            <sub>{{ Intl.NumberFormat("en-US", { notation: "compact" }).format(channel.subs) }} subscribers</sub>
          </aside>
        </aside>

        <aside class="subscribe">
          <button class="subscribe">Subscribe</button>
          <button class="action"><Icon name="notifications" /></button>
        </aside>
      </footer>

      <section class="tabs">
        <NuxtLink :to="`/channel/${channel.id}`">Home</NuxtLink>
        <NuxtLink :to="`/channel/${channel.id}/videos`">Videos</NuxtLink>
        <NuxtLink :to="`/channel/${channel.id}/playlists`">Playlists</NuxtLink>
        <NuxtLink :to="`/channel/${channel.id}/community`">Community</NuxtLink>
        <NuxtLink :to="`/channel/${channel.id}/channels`">Channels</NuxtLink>
        <NuxtLink :to="`/channel/${channel.id}/about`">About</NuxtLink>
      </section>
    </section>

    <NuxtChild />
  </aside>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

aside.content#channel {
  section.channel {
    @include flex($dir: column);
    @include mobile { figure.banner { height: 120px !important } }

    footer {
      padding: 24px 32px;
      @include flex(center, space-between, $gap: 16px);
      @include mobile { padding: 16px; flex-direction: column }

      aside {
        @include flex(center, $gap: 12px);

        &.information {
          @include mobile { flex-direction: column }

          figure.image { width: 64px !important; height: 64px !important; flex-shrink: 0 }

          aside {
            @include flex($dir: column, $gap: 4px);
            @include mobile { align-items: center }

            h1 { font-size: 24px; font-weight: 500 }
            sub { color: var(--icon) }
          }
        }

        &.subscribe {
          @include mobile {
            position: relative;
            button.action { position: absolute; right: -36px }
          }
        }
      }
    }

    section.tabs {
      padding: 0 32px;
      overflow-x: auto;
      background: var(--bg);
      position: sticky; top: 0;
      border-bottom: 1px solid var(--gray);
      @include flex;
      @include mobile { padding: 0; order: -1; border: none }

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