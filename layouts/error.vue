<script lang="ts">
import Vue, { PropType } from "vue"

interface Error {
  title:      string
  message:    string
  statusCode: number
}

export default Vue.extend({
  name: "ErrorLayout",

  props: {
    error: {
      type: <PropType<Error>>Object
    }
  },

  data: () => ({
    errors: <{[key: number]: string}>{
      404: "PAGE_NOT_FOUND",
      500: "INTERNAL_SERVER_ERROR"
    }
  })
})
</script>

<template>
  <aside class="content" id="error">
    <figure class="status">
      <Icon name="close" />
      <aside>
        <h1>An error has occured</h1>
        <p>See the details below</p>
      </aside>
    </figure>

    <pre class="details">
      <h1><span>{{ error.statusCode }}</span>: {{ errors[error.statusCode] }}</h1>
      <p>{{ error.message }}</p>
    </pre>

    <div class="buttons">
      <a @click="$router.back()">Go back</a>
      <NuxtLink to="/">Home</NuxtLink>
    </div>
  </aside>
</template>

<style lang="scss">
@import "@/assets/css/mixins.scss";

aside.content#error {
  padding: 24px;
  @include flex($align: center, $dir: column, $gap: 24px);

  figure.status {
    @include flex($gap: 16px);

    svg.close {
      padding: 4px;
      width: 48px;
      height: 48px;
      border-radius: 9999px;
      background: var(--bg-red);
      path { fill: var(--red) }
    }

    aside {
      h1 { font-size: 24px }
      p { color: var(--icon); font-size: 14px }
    }
  }

  pre.details {
    padding: 16px;
    border-radius: 6px;
    max-width: fit-content;
    border: 1px solid var(--gray);
    @include flex($dir: column, $gap: 8px);

    p { color: var(--icon) }
  }

  div.buttons {
    @include flex($gap: 16px);

    a {
      cursor: pointer;
      padding: 10px 28px;
      border-radius: 6px;
      border: 1px solid var(--gray);
      color: var(--red); font-weight: 500;
      &:hover { background: var(--bg-red); border-color: var(--bg-red) }
    }
  }
}
</style>