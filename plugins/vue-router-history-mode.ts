import type { Plugin } from "vite";

export default (): Plugin => ({
  name: "vue-router-history-mode",
  configureServer(server) {
    server.middlewares.use("/vite-ground/vue/", (req, res, next) => {
      if (req.url?.endsWith(".html") || !req.url?.includes(".")) {
        console.log(req.url, req.originalUrl);
        req.url = "/";
      }
      next();
    });
  },
});
