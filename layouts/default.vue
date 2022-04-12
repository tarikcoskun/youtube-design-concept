<script lang="ts">
import Vue from "vue"
import { channels } from "@/assets/utils"

export default Vue.extend({
  name: "DefaultLayout",
  data: () => ({ channels, sidebarCollapsed: false })
})
</script>

<template>
  <div :id="$route.name ? $route.name + '-page' : 'error-page'">
    <header class="navigation">
      <aside class="brand">
        <button class="menu action" @click="sidebarCollapsed = !sidebarCollapsed"><Icon name="menu" /></button>
        <NuxtLink class="home" to="/"><Icon name="logo" /></NuxtLink>
      </aside>

      <aside class="search">
        <button class="action"><Icon name="search" /></button>
        <input type="text" placeholder="Search" />
        <button class="action"><Icon name="microphone" /></button>
      </aside>

      <aside class="user">
        <button class="notifications action"><Icon name="notifications" /></button>
        <button class="search action"><Icon name="search" /></button>
        <button class="avatar action"><Icon name="user" /></button>
      </aside>
    </header>

    <main :class="($route.name === null || $route.name === 'watch') ? { sidebar: sidebarCollapsed } : { compact: sidebarCollapsed }">
      <aside class="sidebar">
        <aside class="links">
          <NuxtLink to="/"><Icon name="home" /> <h1>Home</h1></NuxtLink>
          <NuxtLink to="/explore"><Icon name="explore" /> <h1>Explore</h1></NuxtLink>
          <NuxtLink to="/subscriptions"><Icon name="subscriptions" /> <h1>Subscriptions</h1></NuxtLink>
          <NuxtLink to="/library"><Icon name="library" /> <h1>Library</h1></NuxtLink>
        </aside>

        <aside class="library">
          <NuxtLink to="/library"><Icon name="library" /> <h1>Library</h1></NuxtLink>
          <NuxtLink to="/library/history"><Icon name="history" /> <h1>History</h1></NuxtLink>
          <NuxtLink to="/library/playlist?list=WL"><Icon name="watch-later" /> <h1>Watch later</h1></NuxtLink>
          <NuxtLink to="/library/playlist?list=LV"><Icon name="like" /> <h1>Liked videos</h1></NuxtLink>
        </aside>

        <aside class="subscriptions">
          <h1>SUBSCRIPTIONS</h1>

          <NuxtLink :to="`/channel/${channel.id}`" v-for="(channel, index) in channels" :key="index">
            <SmartImage :src="channel.avatar" width="24" height="24" radius="rounded" /> <h1>{{ channel.name }}</h1>
          </NuxtLink>
        </aside>
      </aside>

      <Nuxt />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

div {
  header.navigation {
    padding: 8px 12px;
    background: var(--bg);
    position: sticky; top: 0;
    border-bottom: 1px solid var(--gray);
    @include flex(center, space-between);

    aside {
      &.brand {
        @include flex(center, $gap: 8px);

        button.menu {
          padding: 12px;
          @include mobile { display: none }
        }

        a.home {
          @include flex(center, center);
          svg.logo { width: 90px }
        }
      }

      &.search {
        width: 50%;
        padding: 4px 10px;
        border-radius: 8px;
        background: var(--gray);
        transition: 150ms background, 150ms box-shadow;
        @include flex(center);
        @include mobile { display: none }

        input {
          flex-grow: 1;
          padding: 8px;
          font-size: 16px;
          background: transparent;
          &:focus { outline: none }
        }

        &:focus-within {
          background: white;
          box-shadow: 0 1px 4px var(--shadow);
          svg path, input, input::placeholder { fill: #5f6368; color: #5f6368 }
        }
      }

      &.user {
        @include flex(center, $gap: 8px);
        @include mobile { button.search { display: flex !important } }
        button.avatar {
          padding: 4px;
          svg { width: 32px }
        }
        button.search { display: none }
      }
    }
  }

  main {
    overflow-y: hidden;
    @include flex(flex-start);
    @include mobile { flex-direction: column-reverse }

    > aside {
      &.sidebar {
        width: 256px;
        flex-shrink: 0;
        overflow-y: auto;
        background: var(--bg);
        height: calc(100vh - 65px);
        position: sticky; top: 65px;
        border-right: 1px solid var(--gray);
        @include mobile { width: 100%; height: auto; bottom: 0; border: none }

        aside {
          padding: 12px 12px 12px 0;
          @include flex($dir: column);
          @include mobile {
            padding: 0;
            @include grid(4, 0);
            &.library, &.subscriptions { display: none }
          }

          > h1 {
            margin: 0 0 8px 24px;
            color: var(--icon); font-size: 14px; font-weight: 500;
          }

          a {
            font-weight: 500;
            padding: 10px 24px;
            border-radius: 0 9999px 9999px 0;
            @include flex(center, $gap: 16px);
            @include mobile {
              padding: 8px; border-radius: 0;
              flex-direction: column; flex-grow: 1; gap: 6px;
              h1 { font-size: 12px }
            }

            &:hover { background: var(--hover) }
            &.nuxt-link-exact-active {
              background: var(--bg-red);
              svg path { fill: var(--red) }
              h1 { color: var(--red); font-weight: 500 }
              @include mobile {
                position: relative;
                background: transparent;

                &::after {
                  content: "";
                  height: 3px;
                  background: var(--red);
                  position: absolute; top: 0; left: 0; right: 0;
                }
              }
            }
          }

          &.links a:last-child { display: none; @include mobile { display: flex } }
          &:not(:last-child) { border-bottom: 1px solid var(--gray); @include mobile { border: none } }
        }

        &::-webkit-scrollbar-thumb { background: transparent }
        &:hover::-webkit-scrollbar-thumb { background: var(--icon) }
      }

      &.content {
        width: 100%; overflow-y: auto; max-height: calc(100vh - 65px);
        @include mobile { max-height: calc(100vh - 57px - 61px) }
      }
    }

    &.compact aside.sidebar {
      width: 72px;

      h1 { display: none }
      aside {
        margin: 0 24px;
        padding-right: 0;
        @include flex(center, center, $dir: column);

        a { padding: 10px; border-radius: 9999px }
        &.subscriptions { display: none }
      }
    }
  }

  &#watch-page, &#error-page {
    main {
      aside.content { @include mobile { max-height: calc(100vh - 57px) } }

      &:not(.sidebar) aside.sidebar { display: none }
      &.sidebar aside {
        &.sidebar { position: fixed; z-index: 10 }
        &.content {
          filter: blur(48px);
          position: relative;
          pointer-events: none;
        }
      }
    }
  }
}
</style>