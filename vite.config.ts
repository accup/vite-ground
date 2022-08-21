import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/vite-ground/",
  plugins: [vue()],
  appType: "spa",
  build: {
    rollupOptions: {
      input: {
        404: path.resolve(__dirname, "404.html"),
        vanilla: path.resolve(__dirname, "vanilla/index.html"),
        vue: path.resolve(__dirname, "vue/index.html"),
      },
    },
  },
});
