<script setup lang="ts">
const round = {
  "stroke-linejoin": "round",
  "stroke-linecap": "round",
} as const;

const freezeEase = {
  fill: "freeze",
  calcMode: "spline",
  keySplines: "0.5 0 0.5 1",
} as const;

const contents: {
  [name: string]: {
    d: string;
    segments: {
      text: string;
      d: string;
      startOffset: number;
      endOffset: number;
      fontSize: number;
      auxiliary: { stroke: string };
    }[];
  };
} = {
  spade: {
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
    segments: [
      {
        text: "スペード (spade) は、トランプなどで使用される",
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
        d: `
          M13.5 58
          L86.5 58
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
        d: `
          M32 65
          L85 65
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
  <svg
    id="book__spade"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <template v-for="(content, id) in contents">
        <path :id="`book__defs_${id}`" :d="content.d" />
        <path
          v-for="(segment, index) in content.segments"
          :id="`book__defs_${id}_${index}`"
          :d="segment.d"
        />
      </template>
    </defs>
    <g class="content">
      <use
        href="#book__defs_spade"
        stroke-width="3"
        stroke="rgba(0, 0, 0, 1)"
        fill="rgba(0, 0, 0, 0)"
        :="round"
      >
        <animate
          begin="book__spade_ui.click"
          attributeName="stroke"
          values="rgba(0, 0, 0, 1);rgba(0, 0, 0, 0)"
          dur="0.5s"
          :="freezeEase"
        />
        <animate
          begin="book__spade_ui.click + 2s"
          attributeName="fill"
          values="rgba(0, 0, 0, 0);rgba(0, 0, 0, 0.5)"
          dur="1s"
          :="freezeEase"
        />
      </use>
      <g>
        <set
          begin="book__spade_ui.click"
          end="reset.click"
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
        >
          Click!
        </text>
        <use
          id="book__spade_ui"
          class="pointer"
          href="#book__defs_spade"
          stroke-width="3"
          stroke="transparent"
          fill="transparent"
          :="round"
        ></use>
      </g>
      <template v-for="(segment, index) in contents.spade.segments">
        <text dy="1">
          <animate
            begin="book__spade_ui.click + 2s"
            attributeName="fill"
            values="rgba(0, 0, 0, 1);rgba(255, 255, 255, 1)"
            dur="1s"
            :="freezeEase"
          />
          <textPath
            :href="`#book__defs_spade_${index}`"
            :startOffset="segment.startOffset"
            :font-size="segment.fontSize"
          >
            <animate
              begin="book__spade_ui.click + 1s"
              attributeName="startOffset"
              :values="`${segment.startOffset};${segment.endOffset}`"
              dur="2s"
              :="freezeEase"
            />
            {{ segment.text }}
          </textPath>
        </text>
      </template>
    </g>
    <g class="auxiliary">
      <use
        href="#book__defs_spade"
        stroke="blue"
        stroke-width="2"
        fill="none"
        opacity="0.4"
        :="round"
      />
      <template v-for="(segment, index) in contents.spade.segments">
        <use
          :href="`#book__defs_spade_${index}`"
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
