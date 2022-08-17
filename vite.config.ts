import { defineConfig } from "vite";
import routes from "./vite-routes";

export default defineConfig({
  root: "src/",
  base: "/vite-ground/",
  build: {
    rollupOptions: {
      input: routes,
    },
  },
});
