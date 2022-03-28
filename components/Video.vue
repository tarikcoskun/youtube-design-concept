<script lang="ts">
import Vue, { PropType } from "vue"
import { getReadableDate } from "@/assets/utils"
import type { Video } from "@/types/Video"

export default Vue.extend({
  methods: { getReadableDate },

  props: {
    video: {
      type: <PropType<Video>>Object,
      required: true
    }
  }
})
</script>

<template>
  <NuxtLink class="video" :to="`/watch?v=${video.id}`">
    <SmartImage :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`" radius="4" cover />
    <footer>
      <h1 :title="video.title">{{ video.title }}</h1>
      <aside>
        <NuxtLink class="channel" :to="`/channel/${video.channel.url}`">
          <SmartImage :src="video.channel.avatar" width="24" height="24" radius="rounded" />
          <h1 class="name">{{ video.channel.name }}</h1>
        </NuxtLink>
        <span class="date">{{ getReadableDate(video.publishedAt) }}</span>
      </aside>
    </footer>
  </NuxtLink>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

a.video {
  @include flex($dir: column, $gap: 16px);
  @include mobile { gap: 0 }

  > figure.image {
    width: 100%; aspect-ratio: 16/9;
    @include mobile { border-radius: 0 !important}
  }

  footer {
    @include flex($dir: column, $gap: 8px);
    @include mobile { padding: 16px }
    > h1 { font-weight: 500; @include line-clamp(2) }

    aside {
      @include line-clamp;
      @include flex(center, $gap: 6px);
      span.date { color: var(--icon); font-size: 14px; flex-shrink: 0 }

      a.channel { @include flex(center, $gap: 8px) }
    }
  }
}
</style>