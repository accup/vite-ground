<script setup lang="ts">
import { defineProps } from "vue";

export interface ShapeProps {
  id: string;
  content: {
    d: string;
    clickText?: string;
    startShapeStroke: string;
    endShapeStroke: string;
    startShapeFill: string;
    endShapeFill: string;
    startTextFill: string;
    endTextFill: string;
    segments: {
      text: string;
      textLength: number;
      d: string;
      startOffset: number;
      endOffset: number;
      fontSize: number;
      auxiliary: { stroke: string };
    }[];
  };
}

const { resetDuration, shapeProps } = defineProps<{
  resetDuration: string;
  shapeProps: ShapeProps;
}>();

const { id, content } = shapeProps;

const round = {
  "stroke-linejoin": "round",
  "stroke-linecap": "round",
} as const;

const freezeEase = {
  fill: "freeze",
  calcMode: "spline",
  keySplines: "0.5 0 0.5 1",
} as const;
</script>

<template>
  <svg
    :id="`book__${id}`"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <path :id="`book__defs_${id}`" :d="content.d" />
      <path
        v-for="(segment, index) in content.segments"
        :id="`book__defs_${id}_${index}`"
        :d="segment.d"
      />
    </defs>
    <g class="content">
      <use
        :href="`#book__defs_${id}`"
        stroke-width="3"
        :stroke="content.startShapeStroke"
        :fill="content.startShapeFill"
        :="round"
      >
        <animate
          :begin="`book__${id}_ui.click`"
          attributeName="stroke"
          :values="`${content.startShapeStroke};${content.endShapeStroke}`"
          dur="0.5s"
          :="freezeEase"
        />
        <animate
          :begin="`book__${id}_ui.click + 2s`"
          attributeName="fill"
          :values="`${content.startShapeFill};${content.endShapeFill}`"
          dur="1s"
          :="freezeEase"
        />
        <animate
          begin="reset_animate_display.end"
          attributeName="stroke"
          :values="`${content.endShapeStroke};${content.startShapeStroke}`"
          :dur="resetDuration"
          :="freezeEase"
        />
        <animate
          begin="reset_animate_display.end"
          attributeName="fill"
          :values="`${content.endShapeFill};${content.startShapeFill}`"
          :dur="resetDuration"
          :="freezeEase"
        />
      </use>
      <g>
        <set
          :begin="`book__${id}_ui.click`"
          :end="`book__${id}_animate_display.end`"
          attributeName="display"
          to="none"
        />
        <text
          x="50"
          y="50"
          dx="1"
          dy="7"
          text-anchor="middle"
          fill="white"
          font-size="15"
          v-if="content.clickText != null"
        >
          {{ content.clickText }}
        </text>
        <use
          :id="`book__${id}_ui`"
          class="pointer"
          :href="`#book__defs_${id}`"
          stroke-width="3"
          stroke="transparent"
          fill="transparent"
          :="round"
        ></use>
      </g>
      <g display="none">
        <set
          :begin="`book__${id}_ui.click`"
          :end="`book__${id}_animate_display.end`"
          attributeName="display"
          to="inline"
        />
        <template v-for="(segment, index) in content.segments">
          <text
            dy="1"
            :fill="content.startTextFill"
            text-rendering="geometricPrecision"
          >
            <animate
              :begin="`book__${id}_ui.click + 2s`"
              attributeName="fill"
              :values="`${content.startTextFill};${content.endTextFill}`"
              dur="1s"
              :="freezeEase"
            />
            <animate
              begin="reset_animate_display.end"
              attributeName="fill"
              :values="`${content.endTextFill};${content.startTextFill}`"
              :dur="resetDuration"
              :="freezeEase"
            />
            <textPath
              :href="`#book__defs_${id}_${index}`"
              :startOffset="segment.startOffset"
              :textLength="segment.textLength"
              :font-size="segment.fontSize"
            >
              <animate
                :begin="`book__${id}_ui.click + 1s`"
                attributeName="startOffset"
                :values="`${segment.startOffset};${segment.endOffset}`"
                dur="2s"
                :="freezeEase"
              />
              <animate
                begin="reset_animate_display.end"
                attributeName="startOffset"
                :values="`${segment.endOffset};${segment.startOffset}`"
                :dur="resetDuration"
                :="freezeEase"
              />
              {{ segment.text }}
            </textPath>
          </text>
        </template>
      </g>
    </g>
    <g class="auxiliary">
      <use
        :href="`#book__defs_${id}`"
        stroke="blue"
        stroke-width="2"
        fill="none"
        opacity="0.4"
        :="round"
      />
      <template v-for="(segment, index) in content.segments">
        <use
          :href="`#book__defs_${id}_${index}`"
          :stroke="segment.auxiliary?.stroke"
          stroke-width="1"
          fill="none"
          opacity="0.4"
          :="round"
        />
      </template>
    </g>
  </svg>
</template>
