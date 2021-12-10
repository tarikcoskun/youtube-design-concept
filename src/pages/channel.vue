<script lang="ts" setup>
import { videos } from "@/utils"
import { useRoute } from "vue-router"
import { ref, watchEffect } from "vue"
import Video from "@/components/Video.vue"
import CommunityPost from "@/components/CommunityPost.vue"

let activeTab = ref<HTMLElement>()
let subscribed = ref<Boolean>(true)

const channel = useRoute().query.name

watchEffect(() => {
  document.querySelectorAll("a.tab")?.forEach((tab: Element) => tab.classList.remove("active"))
  activeTab.value?.classList.add("active")
})
</script>

<template>
  <main>
    <section class="channel">
      <figure class="banner" :style="`background-image: url(/${(channel as string).toLowerCase()}-banner.png)`" />
      <figure class="channel-info">
        <img class="avatar" :src="`/${(channel as string)?.toLowerCase()}.png`" alt="Avatar" draggable="false">
        <div class="sub-info">
          <aside class="left">
            <h1 class="name">{{ channel }} </h1>
            <p class="subscribers">195K subs</p>
          </aside>
          <a class="button subscribe" :style="{ background: subscribed ? 'var(--button)': 'red', color: subscribed ? 'var(--title)': 'white' }" @click="subscribed = !subscribed">{{ subscribed ? "SUBSCRIBED": 'SUBSCRIBE' }}</a>
        </div>
      </figure>

      <section class="tabs" @click="($event.target as HTMLElement).tagName === 'A' && (activeTab = $event.target as HTMLElement)">
        <a class="tab active">HOME</a>
        <a class="tab">VIDEOS</a>
        <a class="tab">PLAYLISTS</a>
        <a class="tab">COMMUNITY</a>
        <a class="tab">CHANNELS</a>
        <a class="tab">ABOUT</a>
        <a class="tab search"><i class="material-icons-outlined">search</i></a>
      </section>

      <section class="videos tab-page" v-if="activeTab?.innerText === 'VIDEOS'">
        <label>Uploads</label>
        <div class="container">
          <div class="videos">
            <Video v-for="video in videos[channel as ('Avdan' | 'Fireship')]" :video="video" />
          </div>
        </div>
      </section>

      <section class="playlists tab-page" v-else-if="activeTab?.innerText === 'PLAYLISTS'">
        <label>Playlists</label>
        <div class="container">
        </div>
      </section>

      <section class="community tab-page" v-else-if="activeTab?.innerText === 'COMMUNITY'">
        <label>Community</label>
        <div class="container">
          <CommunityPost :name="channel" content="Well hello there" />
          <CommunityPost :name="channel" content="Here we go again<br /><br />Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam consequatur numquam esse odit eos provident porro, dignissimos, harum sapiente a, quis dolorum voluptas reprehenderit quos aliquam? Totam alias fugit ab nesciunt modi quisquam iusto maxime tenetur obcaecati? Fuga sunt dolorem asperiores in adipisci, nostrum, ipsum beatae impedit cumque vel ipsa natus error, iste sit est?" />
        </div>
      </section>

      <section class="channels tab-page" v-else-if="activeTab?.innerText === 'CHANNELS'">
        <label>Channels</label>
        <div class="container">
          <p>This channel doesn't feature any other channels</p>
        </div>
      </section>

      <section class="about tab-page" v-else-if="activeTab?.innerText === 'ABOUT'">
        <div class="columns">
          <aside>
            <label>About</label>
            <div class="container">
              <p>Welcome to Avdan's Alternate Tech Universe.</p>
                <p>Designer, as a hobby.</p>
                <p>Creating videos since July 2017.</p>
                <br />
                <p>You can contact me for business inquiries from the e-mail address down below:</p>
                <p>business.avdan@gmail.com</p>
            </div>
          </aside>

          <aside>
            <label>Stats</label>
            <div class="container">
              <p>Joined 21 December 2013</p>
              <p>30,000,000 views</p>
            </div>
          </aside>
        </div>
      </section>

      <section class="home tab-page" v-else>
        <label>Season 3</label>
        <div class="container">
          <div class="videos">
            <Video v-for="video in videos[channel as ('Avdan' | 'Fireship')]" :video="video" />
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
