<script setup lang="ts">
import type { ShapeProps } from "./Shape.vue";
import Shape from "./Shape.vue";

const shapeProps: ShapeProps = {
  id: "diamond",
  content: {
    d: `
      M50 10
      L20 50
      L50 90
      L80 50
      Z
    `,
    startShapeStroke: "rgba(240, 80, 0, 1)",
    endShapeStroke: "rgba(240, 80, 0, 0)",
    startShapeFill: "rgba(248, 148, 88, 0)",
    endShapeFill: "rgba(248, 148, 88, 1)",
    startTextFill: "rgba(240, 80, 0, 1)",
    endTextFill: "rgba(255, 255, 255, 1)",
    segments: [
      {
        text: "ダイヤまたは",
        textLength: 20,
        d: `
          M40 30
          L60 30
          L50 10
          L20 50
        `,
        startOffset: 42,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "orange",
        },
      },
      {
        text: "ダイヤモンド (diamond) は、",
        textLength: 33,
        d: `
          M34.5 35
          L67.5 35
          L50 10
          L20 50
        `,
        startOffset: 84,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "lightyellow",
        },
      },
      {
        text: "組版やデザインで使われる図形で、",
        textLength: 39,
        d: `
          M31.5 40
          L70.5 40
          L50 90
          L20 50
        `,
        startOffset: 92,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "lightgreen",
        },
      },
      {
        text: "頂点が上下左右を向いた菱形である。",
        textLength: 46,
        d: `
          M28 45
          L74 45
          L50 90
          L20 50
          L50 10
        `,
        startOffset: 134.5,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "skyblue",
        },
      },
      {
        text: "やや縦長の「♢ ♦」は、トランプなどで",
        textLength: 50,
        d: `
          M25 50
          L75 50
          L80 50
          L50 90
        `,
        startOffset: 54,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "violet",
        },
      },
      {
        text: "使用される4つのスートの1つである。",
        textLength: 46,
        d: `
          M28 55
          L74 55
          L80 50
          L50 90
          L20 50
        `,
        startOffset: 103,
        endOffset: 0,
        fontSize: 2.5,
        auxiliary: {
          stroke: "darkorange",
        },
      },
      {
        text: "出典: フリー百科事典",
        textLength: 20,
        d: `
          M40 62.5
          L60 62.5
          L80 50
          L50 10
        `,
        startOffset: 43,
        endOffset: 0,
        fontSize: 2,
        auxiliary: {
          stroke: "darkgreen",
        },
      },
      {
        text: "『ウィキペディア（Wikipedia）』",
        textLength: 31,
        d: `
          M34.5 66
          L65.5 66
          L80 50
          L50 10
        `,
        startOffset: 72,
        endOffset: 0,
        fontSize: 2,
        auxiliary: {
          stroke: "darkblue",
        },
      },
    ],
  },
};
</script>

<template>
  <Shape :="shapeProps" />
</template>
