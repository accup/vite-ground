import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Index from "./pages/Index.vue";

const routes: RouteRecordRaw[] = [{ path: "/", component: Index }];

export default createRouter({
  history: createWebHistory("/vite-ground/vue/"),
  routes,
});
