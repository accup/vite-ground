<script setup lang="ts">
import Spade from "../../../components/svgs/dive-text-animation/Spade.vue";

const freezeEase = {
  fill: "freeze",
  calcMode: "spline",
  keySplines: "0.5 0 0.5 1",
} as const;
</script>

<template>
  <input id="auxiliary" type="checkbox" />
  <label for="auxiliary">補助線を見る</label>
  <svg id="book" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10 0)">
      <g transform="scale(0.3)" transform-origin="50 50">
        <animateTransform
          begin="book__spade_ui.click"
          attributeName="transform"
          type="scale"
          values="0.3;1"
          dur="0.7s"
          :="freezeEase"
        />
        <Spade width="100" height="100" />
      </g>
    </g>
  </svg>
</template>

<style>
#book {
  background-color: lightgray;
}

.pointer {
  cursor: pointer;
}

label {
  user-select: none;
}

#auxiliary:not(:checked) ~ #book .auxiliary {
  display: none;
}
</style>
