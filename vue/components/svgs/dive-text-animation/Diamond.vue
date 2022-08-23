<script setup lang="ts">
import type { ShapeProps } from "./Shape.vue";
import Shape from "./Shape.vue";

const shapeProps: ShapeProps = {
  id: "diamond",
  content: {
    d: `
      M50 40
      C50 10 10 10 10 40
      Q10 60 50 90
      Q90 60 90 40
      C90 10 50 10 50 40
      Z
    `,
    startShapeStroke: "rgba(240, 0, 0, 1)",
    endShapeStroke: "rgba(240, 0, 0, 0)",
    startShapeFill: "rgba(248, 108, 108, 0)",
    endShapeFill: "rgba(248, 108, 108, 1)",
    startTextFill: "rgba(240, 0, 0, 1)",
    endTextFill: "rgba(255, 255, 255, 1)",
    segments: [
      {
        text: "ハート（英: heart）、ハートマークは、",
        textLength: 50,
        d: `
          M25 43
          L75 43
          C110 43 50 100 50 40
          C50 10 10 10 10 40
          Q10 60 50 90
        `,
        startOffset: 149,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "orange",
        },
      },
      {
        text: "心臓を表すシンボル。一般的に色は赤で示される。",
        textLength: 64,
        d: `
          M18 48
          L82 48
          Q90 48 90 40
          C90 0 10 0 10 40
          Q10 60 50 90
        `,
        startOffset: 191,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "lightyellow",
        },
      },
      {
        text: "なお、日本の建築などでみられる同様の形の",
        textLength: 56,
        d: `
          M25 53
          L75 53
          C120 53 50 140 50 40
          C50 10 90 10 90 40
          Q90 60 50 90
        `,
        startOffset: 189.5,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "lightgreen",
        },
      },
      {
        text: "文様や透かし彫りは猪目と呼ばれる。",
        textLength: 50,
        d: `
          M22 58
          L78 58
          Q94 58 98 40
          C102 27 90 20 90 40
          Q90 60 50 90
        `,
        startOffset: 131,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "skyblue",
        },
      },
      {
        text: "出典: フリー百科事典",
        textLength: 20,
        d: `
          M40 66
          L60 66
          C110 66 10 88 10 40
          C10 10 50 10 50 40
        `,
        startOffset: 162,
        endOffset: 0,
        fontSize: 2,
        auxiliary: {
          stroke: "violet",
        },
      },
      {
        text: "『ウィキペディア（Wikipedia）』",
        textLength: 34,
        d: `
          M33 70
          L67 70
          C80 70 80 60 65 55
          Q50 50 50 40
          C50 10 90 10 90 40
        `,
        startOffset: 83,
        endOffset: 0,
        fontSize: 2,
        auxiliary: {
          stroke: "violet",
        },
      },
    ],
  },
};
</script>

<template>
  <Shape :="shapeProps" />
</template>
