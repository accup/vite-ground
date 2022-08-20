<script setup lang="ts">
import { getPages } from "../src/pages";
const pages = getPages();
</script>

<template>
  <ul>
    <li v-for="page in pages">
      <router-link :to="page.link">{{ page.name }}</router-link>
    </li>
  </ul>
</template>
