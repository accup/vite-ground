import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/vite-ground/",
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        vanilla: path.resolve(__dirname, "vanilla/index.html"),
        vue: path.resolve(__dirname, "vue/index.html"),
      },
    },
  },
});
