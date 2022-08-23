<script setup lang="ts">
import type { ShapeProps } from "./Shape.vue";
import Shape from "./Shape.vue";

const shapeProps: ShapeProps = {
  id: "club",
  content: {
    d: `
      M55 65
      C90 100 110 30 65 40
      C80 0 20 0 35 40
      C-10 30 10 100 45 65
      L40 90
      L60 90
      Z
    `,
    startShapeStroke: "rgba(16, 80, 16, 1)",
    endShapeStroke: "rgba(16, 80, 16, 0)",
    startShapeFill: "rgba(108, 160, 108, 0)",
    endShapeFill: "rgba(108, 160, 108, 1)",
    startTextFill: "rgba(16, 80, 16, 1)",
    endTextFill: "rgba(255, 255, 255, 1)",
    segments: [
      {
        text: "クラブ (club) あるいはクローバー (clover) は、トランプなどで",
        textLength: 72,
        d: `
          M14 46
          L86 46
          C110 46 20 30 55 65
          C90 100 110 30 65 40
        `,
        startOffset: 154.5,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "orange",
        },
      },
      {
        text: "使用されるスートのひとつである。15世紀にフランスのルーアンと",
        textLength: 74,
        d: `
          M13 51
          L87 51
          C112 51 80 50 35 40
          C-10 30 10 100 45 65
        `,
        startOffset: 144,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "lightyellow",
        },
      },
      {
        text: "リヨンで使われ始めたといわれている。オリジナルはフランス柄の",
        textLength: 76,
        d: `
          M12 56
          L88 56
          C120 56 35 120 65 40
          C80 0 20 0 35 40
        `,
        startOffset: 169.5,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "lightgreen",
        },
      },
      {
        text: "“Trèfle” で英語では clover, 日本語では三つ葉を意味する。",
        textLength: 68,
        d: `
          M16 61
          L84 61
          C120 61 50 40 45 65
          L40 90
          L60 90
          L55 65
        `,
        startOffset: 137,
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
          M65 40
          C110 30 90 100 55 65
          C20 30 20 26 40 26
          L60 26
        `,
        startOffset: 67,
        endOffset: 147,
        fontSize: 2,
        auxiliary: {
          stroke: "violet",
        },
      },
      {
        text: "『ウィキペディア（Wikipedia）』",
        textLength: 30,
        d: `
          M35 30
          L65 30
          C80 30 80 30 45 65
          C10 100 -10 30 35 40
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
