<script lang="ts">
import Vue from "vue"
import { channels } from "@/assets/utils"

export default Vue.extend({
  data() {
    const featured = channels.filter((channel) => channel.id !== this.$route.params.id)
    return { featured }
  }
})
</script>

<template>
  <section class="container" id="channels">
    <NuxtLink class="channel" :to="`/channel/${channel.id}`" v-for="(channel, index) in featured" :key="index">
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
  @include flex(center, $gap: 24px);
  @include mobile { flex-direction: column }

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