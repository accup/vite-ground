<script setup lang="ts">
import Spade from "../../../components/svgs/dive-text-animation/Spade.vue";
import Heart from "../../../components/svgs/dive-text-animation/Heart.vue";
import Diamond from "../../../components/svgs/dive-text-animation/Diamond.vue";
import Club from "../../../components/svgs/dive-text-animation/Club.vue";

const resetDuration = "3s";

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
  <svg id="book" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0 0)">
      <animateTransform
        begin="book__heart_ui.click"
        attributeName="transform"
        type="translate"
        values="0 0;135 -95"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        begin="book__diamond_ui.click"
        attributeName="transform"
        type="translate"
        values="135 -95;575 -415"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        begin="book__club_ui.click"
        attributeName="transform"
        type="translate"
        values="575 -415;2875 -2205"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        id="book__spade_animate_display"
        begin="reset_animate_display.end"
        attributeName="transform"
        type="translate"
        values="2875 -2205;0 0"
        :dur="resetDuration"
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
          values="1;5"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="book__diamond_ui.click"
          attributeName="transform"
          type="scale"
          values="5;25"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="book__club_ui.click"
          attributeName="transform"
          type="scale"
          values="25;125"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="reset_animate_display.end"
          attributeName="transform"
          type="scale"
          values="125;0.2"
          :dur="resetDuration"
          :="freezeEase"
        />
        <Spade width="100" height="100" :reset-duration="resetDuration" />
      </g>
    </g>
    <g transform="translate(-27 19)" opacity="0" display="none">
      <set
        id="book__heart_animate_display"
        begin="book__spade_ui.click + 2s"
        :end="`reset_animate_display.end + ${resetDuration}`"
        attributeName="display"
        to="inline"
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
        values="-27 19;0 0"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        begin="book__diamond_ui.click"
        attributeName="transform"
        type="translate"
        values="0 0;-100 100"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        begin="book__club_ui.click"
        attributeName="transform"
        type="translate"
        values="-100 100;-500 370"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        begin="reset_animate_display.end"
        attributeName="transform"
        type="translate"
        values="-500 370;-5.4 3.8"
        :dur="resetDuration"
        :="freezeEase"
      />
      <set
        begin="book__heart_animate_display.end"
        end="book__heart_animate_display.end"
        attributeName="opacity"
        to="0"
        :="freeze"
      />
      <set
        begin="book__heart_animate_display.end"
        attributeName="transform"
        to="translate(-27 19)"
        :="freeze"
      />
      <g transform="scale(0.2)" transform-origin="50 50">
        <animateTransform
          begin="book__heart_ui.click"
          attributeName="transform"
          type="scale"
          values="0.2;1"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="book__diamond_ui.click"
          attributeName="transform"
          type="scale"
          values="1;5"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="book__club_ui.click"
          attributeName="transform"
          type="scale"
          values="5;25"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="reset_animate_display.end"
          attributeName="transform"
          type="scale"
          values="25;0.04"
          :dur="resetDuration"
          :="freezeEase"
        />
        <set
          begin="book__heart_animate_display.end"
          attributeName="transform"
          to="scale(0.2)"
          :="freeze"
        />
        <Heart width="100" height="100" :reset-duration="resetDuration" />
      </g>
    </g>
    <g transform="translate(20 -20)" opacity="0" display="none">
      <set
        id="book__diamond_animate_display"
        begin="book__heart_ui.click + 2s"
        :click="`reset_animate_display.end + ${resetDuration}`"
        attributeName="display"
        to="inline"
      />
      <animate
        begin="book__heart_ui.click + 2s"
        attributeName="opacity"
        values="0;1"
        dur="1s"
        :="freezeEase"
      />
      <animateTransform
        begin="book__diamond_ui.click"
        attributeName="transform"
        type="translate"
        values="20 -20;0 0"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        begin="book__club_ui.click"
        attributeName="transform"
        type="translate"
        values="0 0;0 -130"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        begin="reset_animate_display.end"
        attributeName="transform"
        type="translate"
        values="0 -130;-4.6 3"
        :dur="resetDuration"
        :="freezeEase"
      />
      <set
        begin="book__diamond_animate_display.end"
        attributeName="opacity"
        to="0"
        :="freeze"
      />
      <set
        begin="book__diamond_animate_display.end"
        attributeName="transform"
        to="translate(20 -20)"
        :="freeze"
      />
      <g transform="scale(0.2)" transform-origin="50 50">
        <animateTransform
          begin="book__diamond_ui.click"
          attributeName="transform"
          type="scale"
          values="0.2;1"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="book__club_ui.click"
          attributeName="transform"
          type="scale"
          values="1;5"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="reset_animate_display.end"
          attributeName="transform"
          type="scale"
          values="5;0.008"
          :dur="resetDuration"
          :="freezeEase"
        />
        <set
          begin="book__diamond_animate_display.end"
          attributeName="transform"
          to="scale(0.2)"
          :="freeze"
        />
        <Diamond width="100" height="100" :reset-duration="resetDuration" />
      </g>
    </g>
    <g transform="translate(0 26)" opacity="0" display="none">
      <set
        id="book__club_animate_display"
        begin="book__diamond_ui.click + 2s"
        :end="`reset_animate_display + ${resetDuration}`"
        attributeName="display"
        to="inline"
      />
      <animate
        begin="book__diamond_ui.click + 2s"
        attributeName="opacity"
        values="0;1"
        dur="1s"
        :="freezeEase"
      />
      <animateTransform
        begin="book__club_ui.click"
        attributeName="transform"
        type="translate"
        values="0 26;0 0"
        dur="0.7s"
        :="freezeEase"
      />
      <animateTransform
        begin="reset_animate_display.end"
        attributeName="transform"
        type="translate"
        values="0 0;-4.6 3.208"
        :dur="resetDuration"
        :="freezeEase"
      />
      <set
        begin="book__club_animate_display.end"
        attributeName="opacity"
        to="0"
        :="freeze"
      />
      <set
        begin="book__club_animate_display.end"
        attributeName="transform"
        to="translate(0 26)"
        :="freeze"
      />
      <g transform="scale(0.2)" transform-origin="50 50">
        <animateTransform
          begin="book__club_ui.click"
          attributeName="transform"
          type="scale"
          values="0.2;1"
          dur="0.7s"
          :="freezeEase"
        />
        <animateTransform
          begin="reset_animate_display.end"
          attributeName="transform"
          type="scale"
          values="1;0.0016"
          :dur="resetDuration"
          :="freezeEase"
        />
        <set
          begin="book__club_animate_display.end"
          attributeName="transform"
          to="scale(0.2)"
          :="freeze"
        />
        <Club width="100" height="100" :reset-duration="resetDuration" />
      </g>
    </g>
    <g transform="translate(0 26)" opacity="0" display="none">
      <set
        id="reset_animate_display"
        begin="book__club_ui.click + 2s"
        end="reset.click + 0.5s"
        attributeName="display"
        to="inline"
      />
      <animate
        begin="book__club_ui.click + 2s"
        attributeName="opacity"
        values="0;1"
        dur="1s"
        :="freezeEase"
      />
      <animate
        begin="reset.click"
        attributeName="opacity"
        values="1;0"
        dur="0.5s"
        :="freezeEase"
      />
      <g transform="scale(0.2)" transform-origin="50 50">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="1"
          fill="white"
        />
        <circle
          id="reset"
          class="pointer"
          cx="50"
          cy="50"
          r="40"
          stroke="transparent"
          stroke-width="1"
          fill="transparent"
          display="none"
        >
          <set
            begin="book__club_ui.click + 2s"
            end="reset.click"
            attributeName="display"
            to="inline"
          />
        </circle>
      </g>
    </g>
  </svg>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");

#app {
  max-width: 768px;
  margin: 0 auto;
}

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
