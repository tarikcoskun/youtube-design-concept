<script lang="ts" setup>
import { PropType } from "vue";
import { Video, getReadableDate } from "@/utils"

defineProps({
  video: {
    type: Object as PropType<Video>,
    required: true
  }
})
</script>

<template>
  <router-link class="video" :to="`/watch?v=${video.id}`">
    <img class="thumbnail" :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` " alt="thumbnail" draggable="false">

    <div class="details">
      <h1 class="title" :title="video.title">{{ video.title }}</h1>
      <footer class="bottom" v-if="video.publisher">
        <router-link :to="`/c?name=${video.publisher}`" class="creator-details">
          <img class="avatar" :src="`/${video.publisher.toLowerCase()}.png`" :alt="video.publisher">
          <h1 class="name">{{ video.publisher }}</h1>
        </router-link>
        <span class="dot">•</span>
        <span class="views">{{ getReadableDate(video.publishedAt as unknown as Date) }}</span>
      </footer>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "@/styles/utility.scss";

a.video {
  flex: 0 0 25%;
  @include flex($direction: column);

  img.thumbnail { aspect-ratio: 16/8.9; object-fit: cover; border-radius: 4px; }
  div.details {
    @include flex($direction: column);

    h1.title {
      padding: 8px 0;
      color: var(--title); font-size: 16px; font-weight: 600;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }

    span.views { font-size: 16px; font-weight: 500; }
  }

  footer.bottom {
    @include flex($align: center);

    a.creator-details {
      @include flex($align: center, $gap: 8px);
      img.avatar { border-radius: 36px; width: 24px; height: 24px; }
      h1.name { color: var(--title); font-size: 16px; font-weight: 500; }
    }

    span.dot { font-size: 12px; margin: 0 4px; }
  }
}

@media only screen and (max-width: 800px) {
  a.video {
    flex: 0 0 25%;
    @include flex($direction: column);

    img.thumbnail { aspect-ratio: 16/8.9; object-fit: cover; border-radius: 4px; }
    div.details {
      @include flex($direction: column);

      h1.title {
        padding: 8px 0;
        color: var(--title); font-size: 16px; font-weight: 600;
        overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }

      span.views { font-size: 16px; font-weight: 500; }
    }

    footer.bottom {
      @include flex($align: center);

      a.creator-details {
        @include flex($align: center, $gap: 8px);

        img.avatar { border-radius: 36px; width: 24px; height: 24px; }
        h1.name { color: var(--title); font-size: 16px; font-weight: 500; }
      }

      span.dot { font-size: 12px; margin: 0 4px; }
    }
  }
}
</style>