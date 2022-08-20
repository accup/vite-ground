import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Index from "./components/Index.vue";
import Page from "./components/Page.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Index },
  { path: "/:names+", component: Page },
];

export default createRouter({
  history: createWebHistory("/vite-ground/vue/"),
  routes,
});
