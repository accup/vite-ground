<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import type { Component } from "vue";
import { useRoute } from "vue-router";

const pages = import.meta.glob<Component>("../pages/**/Index.vue");

function modulePathFromNames(names: string | string[]) {
  if (typeof names === "string") {
    return `../pages/${names}/Index.vue`;
  } else {
    return `../pages/${names.join("/")}/Index.vue`;
  }
}

const route = useRoute();
const modulePath = modulePathFromNames(route.params.names);
const Page = defineAsyncComponent(pages[modulePath]);
</script>

<template>
  <Page />
</template>
