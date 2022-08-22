<script setup lang="ts">
import Spade from "../../../components/svgs/dive-text-animation/Spade.vue";
import Heart from "../../../components/svgs/dive-text-animation/Heart.vue";

const freeze = {
  fill: "freeze",
} as const;
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
      <animateTransform
        begin="book__heart_ui.click"
        attributeName="transform"
        type="translate"
        values="10 0;-20 -25"
        dur="0.7s"
        :="freezeEase"
      />
      <g transform="scale(0.2)" transform-origin="50 50">
        <animateTransform
          begin="book__spade_ui.click"
          attributeName="transform"
          type="scale"
          values="0.2;1"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="book__heart_ui.click"
          attributeName="transform"
          type="scale"
          values="1;0.6"
          dur="0.7s"
          :="freezeEase"
        />
        <Spade width="100" height="100" />
      </g>
    </g>
    <g transform="translate(-16 19)" opacity="0" display="none">
      <set
        begin="book__spade_ui.click + 2s"
        attributeName="display"
        to="inline"
        :="freeze"
      />
      <animate
        begin="book__spade_ui.click + 2s"
        attributeName="opacity"
        values="0;1"
        dur="1s"
        :="freezeEase"
      />
      <animateTransform
        begin="book__heart_ui.click"
        attributeName="transform"
        type="translate"
        values="-16 19;10 0"
        dur="0.7s"
        :="freezeEase"
      />
      <g transform="scale(0.2)" transform-origin="50 50">
        <animateTransform
          begin="book__spade_ui.click"
          attributeName="transform"
          type="scale"
          values="0.04;0.2"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="book__heart_ui.click"
          attributeName="transform"
          type="scale"
          values="0.2;1"
          dur="0.7s"
          :="freezeEase"
        />
        <Heart width="100" height="100" />
      </g>
    </g>
  </svg>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

#book {
  background-color: lightgray;
  font-family: "Noto Sans JP", sans-serif;
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
