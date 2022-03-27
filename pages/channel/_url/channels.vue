<script lang="ts">
import Vue from "vue"
import { Channel } from "@/types/Video"

export default Vue.extend({
  computed: {
    channels() { return this.$accessor.channels.filter((channel: Channel) => channel.url !== this.$route.params.url) }
  }
})
</script>

<template>
  <section id="channels">
    <NuxtLink class="channel" :to="`/channel/${channel.url}`" v-for="(channel, index) in channels" :key="index">
      <SmartImage :src="channel.avatar" width="80" height="80" radius="rounded" />
      <footer>
        <h1>{{ channel.name }}</h1>
        <span>{{ Intl.NumberFormat("en-US", { notation: "compact" }).format(channel.subs) }} subscribers</span>
      </footer>
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";

section#channels {
  padding: 24px;
  @include grid(7, $gap: 24px);

  a.channel {
    @include flex(center, $dir: column, $gap: 16px);

    footer {
      @include flex(center, $dir: column, $gap: 4px);
      h1 { font-size: 20px; font-weight: 500 }
      span { color: var(--icon); font-size: 14px }
    }
  }
}
</style>