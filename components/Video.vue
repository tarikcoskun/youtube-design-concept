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
    <SmartImage class="thumbnail" :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`" radius="4" cover />
    <footer>
      <NuxtLink class="channel" :to="`/channel/${video.channel.id}`">
        <SmartImage :src="video.channel.avatar" width="32" height="32" radius="rounded" />
      </NuxtLink>

      <aside>
        <h1 class="title" :title="video.title">{{ video.title }}</h1>
        <sub>
          <NuxtLink class="channel-name" :to="`/channel/${video.channel.id}`">{{ video.channel.name }}</NuxtLink>
          <span class="date">{{ getReadableDate(video.publishedAt) }}</span>
        </sub>
      </aside>
    </footer>
  </NuxtLink>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

a.video {
  @include flex($dir: column, $gap: 16px);
  @include mobile { gap: 0 }

  figure.thumbnail {
    width: 100%; aspect-ratio: 16/9;
    @include mobile { border-radius: 0 !important }
  }

  footer {
    @include flex($gap: 12px);
    @include mobile { padding: 16px }

    aside {
      @include flex($dir: column, $gap: 8px);
      h1.title { font-weight: 500; @include line-clamp(2) }

      sub {
        font-size: 14px;
        @include flex(center, $gap: 8px);

        a.channel-name, span.date { font-size: inherit }
        span.date { color: var(--icon); flex-shrink: 0 }
      }
    }
  }
}
</style>