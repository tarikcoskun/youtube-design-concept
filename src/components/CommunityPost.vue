<script lang="ts" setup>
defineProps(["name", "content"])
</script>

<template>
  <article class="post">
    <figure class="user-info">
      <img class="avatar" :src="`/${name.toLowerCase()}.png`">
      <aside>
        <h1 class="name">{{ name }}</h1>
        <span class="date">Today</span>
      </aside>
    </figure>

    <p class="content" v-html="content" />

    <footer class="bottom">
      <a class="like">
        <i class="material-icons-outlined">thumb_up</i> 50
      </a>
      <a class="dislike">
        <i class="material-icons-outlined">thumb_down</i>
      </a>
      <a class="dislike">
        <i class="material-icons-outlined">comment</i> 10
      </a>
    </footer>
  </article>
</template>

<style lang="scss" scoped>
@import "@/styles/utility.scss";

article.post {
  padding: 24px;
  border-radius: 8px;
  background: var(--button);
  box-shadow: 0 6px 6px var(--shadow);
  @include flex($direction: column, $gap: 16px);
  figure.user-info {
    @include flex($align: center, $gap: 16px);

    img.avatar {
      border-radius: 36px;
      width: 48px; heigth: 48px;
    }

    aside {
      h1.name {
        color: var(--title); font-size: 18px; font-weight: 600;
      }

      span.date {
        font-size: 16px; font-weight: 500;
      }
    }
  }

  p.content {
    padding-left: 64px;
  }

  footer.bottom {
    padding: 16px 0 0 64px;
    @include flex($gap: 24px);

    a {
      font-size: 18px;
      @include flex($align: center, $gap: 8px);
    }
  }
}

@media only screen and (max-width: 700px) {
  article.post {
    border-radius: 0;
    p.content, footer.bottom { padding-left: 0; }
  }
}
</style>