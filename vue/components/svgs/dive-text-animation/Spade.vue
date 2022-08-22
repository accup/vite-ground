<script setup lang="ts">
import type { ShapeProps } from "./Shape.vue";
import Shape from "./Shape.vue";

const shapeProps: ShapeProps = {
  id: "spade",
  content: {
    d: `
      M50 10
      Q35 27 20 40
      C-10 66 30 95 45 70
      L40 90
      L60 90
      L55 70
      C70 95 110 66 80 40
      Q65 27 50 10
      Z
    `,
    clickText: "Click!",
    startShapeStroke: "rgba(0, 0, 0, 1)",
    endShapeStroke: "rgba(0, 0, 0, 0)",
    startShapeFill: "rgba(108, 108, 108, 0)",
    endShapeFill: "rgba(108, 108, 108, 1)",
    startTextFill: "rgba(0, 0, 0, 1)",
    endTextFill: "rgba(255, 255, 255, 1)",
    segments: [
      {
        text: "スペード (spade) は、トランプなどで使用される",
        textLength: 60,
        d: `
          M20 43
          L80 43
          C110 43 70 -10 50 10
          Q35 27 20 40
          C-10 66 30 95 45 70
        `,
        startOffset: 133,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "orange",
        },
      },
      {
        text: "スートのひとつである。カードゲームではスペードの",
        textLength: 64,
        d: `
          M18 48
          L82 48
          C112 48 50 20 20 40
          C-10 66 30 95 45 70
          L40 90
          L60 90
          L55 70
        `,
        startOffset: 151,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "lightyellow",
        },
      },
      {
        text: "カードが一番強いルールとしているものが多い。15世紀に",
        textLength: 70,
        d: `
          M15 53
          L85 53
          C115 53 50 50 45 70
          L40 90
          L60 90
          L55 70
          C70 95 110 66 80 40
        `,
        startOffset: 132,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "lightgreen",
        },
      },
      {
        text: "フランスのルーアンとリヨンで使われ始めたといわれている。",
        textLength: 74,
        d: `
          M13.5 58
          L87.5 58
          C95 58 90 50 85 45
          C75 30 40 45 55 70
          C70 95 110 66 80 40
          Q65 27 50 10
        `,
        startOffset: 148,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "skyblue",
        },
      },
      {
        text: "出典: フリー百科事典『ウィキペディア（Wikipedia）』",
        textLength: 53,
        d: `
          M33 65
          L86 65
          C100 65 95 53 80 40
          Q65 27 50 10
          Q35 27 20 40
        `,
        startOffset: 90,
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
