/**
 * @type {import('vite').UserConfig}
 */

import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import { resolve } from "path"

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: [
      { find: "~", replacement: resolve(__dirname, ".") },
      { find: "@", replacement: resolve(__dirname, "src") }
    ]
  }
});