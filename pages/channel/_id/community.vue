<script lang="ts">
import Vue from "vue"
import { findChannel } from "@/assets/utils"

export default Vue.extend({
  data() {
    const channel = findChannel(this.$route.params.id)
    return { channel }
  }
})
</script>

<template>
  <section id="community">
    <figure class="post">
      <header>
        <SmartImage :src="channel.avatar" width="36" height="36" radius="rounded" />
        <h1>{{ channel.name }}</h1>
      </header>

      <p>Hello there. This isn't actually {{ channel.name }}, it's the developer of this website. I'm just gonna fill this with some dummy text. Lorem ipsum dolor sit amet consectetur adipisicing elit. At praesentium cumque laboriosam veniam! Earum repellat hic illum possimus cum pariatur velit, suscipit quam, placeat aspernatur rem culpa aut incidunt soluta, repudiandae dolores beatae! Quaerat, excepturi ducimus recusandae eius ad deserunt officiis animi vitae dolore accusantium fugit iusto cum facilis quod.</p>

      <footer>
        <button class="action"><Icon name="like" /> <h1>128</h1></button>
        <button class="action"><Icon name="dislike" /></button>
        <button class="action"><Icon name="comment" /><h1>8</h1></button>
      </footer>
    </figure>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/css/mixins.scss";

section#community {
  padding: 24px;

  figure.post {
    width: 75%;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid var(--gray);
    @include flex($dir: column, $gap: 16px);

    header {
      @include flex(center, $gap: 12px);
      h1 { font-size: 18px; font-weight: 500 }
    }

    p { line-height: 24px }

    footer {
      @include flex(center, $gap: 12px);

      button {
        @include flex(center, $gap: 8px);
        svg { width: 20px }
        h1 { color: var(--icon); font-size: 14px }
      }
    }
  }
}
</style>