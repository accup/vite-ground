<script setup lang="ts"></script>

<template>
  <svg id="book" viewBox="0 0 640 720" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path
        id="book__spade"
        d="
          M50 10
          Q35 27 20 40
          C-10 66 30 100 50 70
          L40 90
          L60 90
          L50 70
          C70 100 110 66 80 40
          Q65 27 50 10
          Z
        "
      />
    </defs>
    <use stroke="white" stroke-width="1" fill="none" href="#book__spade" />
    <text fill="black" dy="1" font-family="PlemolJP" font-size="3">
      <textPath href="#book__spade" textLength="310">
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
      </textPath>
    </text>
  </svg>
</template>

<style scoped>
#book {
  background-color: lightgray;
}
</style>
