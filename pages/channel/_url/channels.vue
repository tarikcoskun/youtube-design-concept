<script lang="ts">
import Vue from "vue"
import { Channel } from "@/types/Video"
import { channels } from "@/assets/utils"

export default Vue.extend({
  data() {
    return {
      channels: channels.filter((channel: Channel) => channel.url !== this.$route.params.url)
    }
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
  @include flex(center, $gap: 24px);
  @include mobile { padding: 16px; flex-direction: column }

  a.channel {
    width: 128px;
    @include flex(center, $dir: column, $gap: 16px);
    @include mobile { width: 100%; flex-grow: 1; flex-direction: row }

    footer {
      @include flex(center, $dir: column, $gap: 4px);
      @include mobile { align-items: flex-start }
      h1 { font-size: 20px; font-weight: 500 }
      span { color: var(--icon); font-size: 14px }
    }
  }
}
</style>