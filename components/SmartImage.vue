<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data: () => ({ error: false, loaded: false }),

  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: false,
      default: null
    },
    height: {
      type: String,
      required: false,
      default: null
    },
    radius: {
      type: String,
      required: false,
      default: "0"
    },
    cover: {
      type: Boolean,
      required: false,
      default: false
    },
    format: {
      type: String,
      required: false,
      default: "webp"
    }
  },

  computed: {
    getBackgroundUrl(): string {
      const { src, width, height, format, error, $img } = this

      if (error || !src) return "/favicon.ico"

      let modifiers: {
        format?: string
        width?: number
        height?: number
      } = {}

      if (format) modifiers.format = format
      if (width) modifiers.width = Number(width)
      if (height) modifiers.height = Number(height)

      return $img(src, modifiers)
    }
  },

  methods: {
    handleError() {
      this.error = true
      this.loaded = true
    }
  }
})
</script>

<template>
  <figure
    class="image"
    :style="{
      width: width + 'px', height: height + 'px',
      backgroundSize: cover ? 'cover' : 'contain',
      backgroundImage: loaded ? `url(${getBackgroundUrl})`: '',
      borderRadius: radius === 'rounded' ? '9999px' : radius + 'px'
    }"
  >
    <img
      :src="getBackgroundUrl"
      :width="width" :height="height"
      @error="handleError" @load="loaded = true"
    />
  </figure>
</template>

<style lang="scss" scoped>
figure.image {
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--gray);
  img { display: none }
}
</style>