<script lang="ts">
import Vue from "vue"
import { getReadableDate, videos } from "@/assets/utils"

export default Vue.extend({
  methods: { getReadableDate },

  data() {
    const video = videos.find((video) => video.id === this.$route.query.v)

    const activeTag = "All"
    const tags = ["All", "Music", "Gaming", "Sports", "Web development", "Computer", "Animation", "Recently uploaded"]
    return { video, videos, tags, activeTag }
  }
})
</script>

<template>
  <aside class="content" id="watch">
    <aside class="video">
      <iframe :src="`https://www.youtube.com/embed/${video.id}?autoplay=1&modestbranding=1`" frameborder="0" allowfullscreen />

      <header>
        <aside class="video-info">
          <h1>{{ video.title }}</h1>
          <sub>
            <span class="date">{{ getReadableDate(video.publishedAt) }}</span>
            <aside>
              <button><Icon name="like" /> <h1>1K</h1></button>
              <button><Icon name="dislike" /> <h1>120</h1></button>
              <button class="share"><Icon name="share" /> <h1>Share</h1></button>
              <button><Icon name="playlist-add" /> <h1>Save</h1></button>
            </aside>
          </sub>
        </aside>
        <hr />
        <aside class="channel-info">
          <NuxtLink class="information" :to="`/channel/${video.channel.id}`">
            <SmartImage :src="video.channel.avatar" width="56" height="56" radius="rounded" />
            <aside>
              <h1>{{ video.channel.name }}</h1>
              <sub>{{ Intl.NumberFormat("en-US", { notation: "compact" }).format(video.channel.subs) }} subscribers</sub>
            </aside>
          </NuxtLink>

          <aside class="subscribe">
            <button class="subscribe">Subscribe</button>
            <button class="action"><Icon name="notifications" /></button>
          </aside>
        </aside>
      </header>
    </aside>

    <aside class="recommendations">
      <section class="tags">
        <div class="overlay-start" />
        <aside class="track" ref="tags">
          <button @click="activeTag = tag" :class="{ active: activeTag === tag }" v-for="tag in tags" :key="tag">
            {{ tag }}
          </button>
        </aside>
        <aside class="controls">
          <button @click="$refs.tags.scrollLeft -= 120"><Icon name="chevron-left" /></button>
          <button @click="$refs.tags.scrollLeft += 120"><Icon name="chevron-right" /></button>
        </aside>
        <div class="overlay-end" />
      </section>

      <section class="videos">
        <Video :video="video" v-for="(video, index) in videos" :key="index" />
      </section>
    </aside>
  </aside>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

aside.content#watch {
  padding: 24px 32px;
  @include flex($gap: 24px);
  @include breakpoint { padding: 0; flex-direction: column; gap: 0 }

  aside {
    &.video {
      flex: 1 0 auto;
      @include flex($dir: column);

      iframe { aspect-ratio: 16/9 }

      header {
        padding: 20px 0;
        @include flex($dir: column, $gap: 16px);
        @include breakpoint { padding: 16px }

        hr { border-top: 2px solid var(--gray) }

        aside {
          &.video-info {
            @include flex($dir: column, $gap: 8px);

            h1 { font-size: 20px }
            sub {
              @include flex(center, space-between, $gap: 16px);
              @include breakpoint { flex-direction: column; align-items: flex-start }

              span.date { color: var(--icon) }
              aside {
                @include flex($gap: 24px);
                @include breakpoint { width: 100%; overflow-x: auto }

                button {
                  padding: 4px;
                  flex: 0 0 16%;
                  @include flex(center, $gap: 8px);
                  @include breakpoint { flex-direction: column }

                  h1 { color: var(--icon); font-size: 16px; font-weight: 500 }
                  &.share svg { transform: rotateY(180deg) }
                }
              }
            }
          }

          &.channel-info {
            @include flex(center, space-between);

            a.information {
              @include flex(center, $gap: 12px);
              @include breakpoint {
                figure.image { flex-shrink: 0; width: 40px !important; height: 40px !important }
              }

              aside {
                @include flex($dir: column, $gap: 4px);

                h1 {
                  font-size: 18px; font-weight: 500;
                  @include breakpoint { font-size: 16px }
                }

                sub {
                  color: var(--icon); font-size: 14px;
                  @include breakpoint { font-size: 12px }
                }
              }
            }

            aside.subscribe {
              @include flex(center, $gap: 12px);
              @include breakpoint { gap: 0 }
            }
          }
        }
      }
    }

    &.recommendations {
      width: 32%;
      @include flex($dir: column, $gap: 16px);
      @include breakpoint { width: auto; gap: 0 }

      section {
        &.tags {
          position: relative;

          button {
            flex: 0 0 auto;
            cursor: pointer;
            padding: 6px 16px;
            border-radius: 9999px;
            background: var(--gray);
            border: 1px solid var(--hover);
            &:hover { background: var(--active) }
            &.active { color: var(--red); background: var(--bg-red); border-color: var(--bg-red) }
          }

          aside {
            &.track {
              overflow-x: auto;
              padding-right: 100px;
              @include flex(center, $gap: 8px);
              @include breakpoint { padding: 12px }

              &::-webkit-scrollbar { display: none }
            }

            &.controls {
              z-index: 1;
              height: 100%;
              position: absolute; top: 0; right: 0;
              @include flex(center, $gap: 4px);
              @include breakpoint { display: none }

              button { padding: 6px }
            }
          }

          div.overlay-start {
            width: 16px; height: 100%;
            position: absolute; left: 0;
            background: linear-gradient(to right, var(--bg), transparent);
          }

          div.overlay-end {
            width: 100px; height: 100%;
            position: absolute; right: 0; top: 0;
            background: linear-gradient(to right, transparent, var(--bg) 16% 100%);
            @include breakpoint { width: 16px; background: linear-gradient(to right, transparent, var(--bg)) }
          }
        }

        &.videos {
          @include breakpoint { padding: 16px }
          @include flex($dir: column, $gap: 12px);

          a.video {
            flex-direction: row;
            @include grid(2, 12px);

            footer {
              padding: 0;
              a.channel { display: none }
              aside sub { flex-direction: column; gap: 4px }
            }
          }
        }
      }
    }
  }
}
</style>