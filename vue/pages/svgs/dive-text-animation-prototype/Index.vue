<script setup lang="ts"></script>

<template>
  <svg id="book" viewBox="0 0 640 720" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path
        id="book__defs_spade"
        d="
          M50 10
          Q35 27 20 40
          C-10 66 30 95 45 70
          L40 90
          L60 90
          L55 70
          C70 95 110 66 80 40
          Q65 27 50 10
          Z
        "
      />
      <clipPath id="book__defs_spade_clip">
        <path
          d="
          M50 10
          Q35 27 20 40
          C-10 66 30 95 45 70
          L40 90
          L60 90
          L55 70
          C70 95 110 66 80 40
          Q65 27 50 10
          Z
        "
        />
      </clipPath>
      <path
        id="book__defs_spade_text_path"
        d="
          M35 30
          L65 30
          M30 36
          L70 36
          M25 42
          L75 42
          M20 48
          L80 48
          M15 54
          L85 54
          M15 60
          L85 60
          M48 12
          Q35 27 20 40
          C-10 66 30 95 45 70
          L40 90
          L60 90
          L55 70
          C70 95 110 66 80 40
          Q65 27 52 12
        "
      />
    </defs>
    <g transform="translate(590, 0)">
      <path
        id="close"
        d="
          M10 10
          L40 40
          M40 10
          L10 40
        "
        stroke="white"
        stroke-width="6"
        fill="none"
      />
    </g>
    <g transform="scale(1)">
      <animateTransform
        begin="close.click"
        attributeName="transform"
        type="scale"
        values="6.4;1"
        fill="freeze"
        dur="2s"
        calcMode="spline"
        keySplines="0.5 0 0.5 1"
      />
      <animateTransform
        begin="book__spade_foreground.click"
        attributeName="transform"
        type="scale"
        values="1;6.4"
        fill="freeze"
        dur="2s"
        calcMode="spline"
        keySplines="0.5 0 0.5 1"
      />
      <use
        id="book__spade"
        href="#book__defs_spade"
        stroke="rgba(255,255,255,1)"
        stroke-width="6"
        fill="black"
        clip-path="url(#book__defs_spade_clip)"
      >
        <animate
          begin="close.click"
          attributeName="stroke"
          values="rgba(255,255,255,0);rgba(255,255,255,1)"
          fill="freeze"
          dur="2s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1"
        />
        <animate
          begin="book__spade_foreground.click"
          attributeName="stroke"
          values="rgba(255,255,255,1);rgba(255,255,255,0)"
          fill="freeze"
          dur="2s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1"
        />
      </use>
      <use
        id="book__spade_foreground"
        href="#book__defs_spade"
        stroke="transparent"
        stroke-width="6"
        stroke-linejoin="round"
        fill="transparent"
      >
        <set
          begin="book__spade_foreground.click"
          end="close.click"
          attributeName="display"
          to="none"
          fill="remove"
        />
      </use>
      <text
        fill="rgba(255,255,255,0)"
        dy="-0.8"
        font-family="PlemolJP"
        font-size="3"
        display="none"
      >
        <set
          begin="book__spade_foreground.click"
          end="close.click + 3s"
          attributeName="display"
          to="inline"
          fill="remove"
        />
        <animate
          begin="book__spade_foreground.click"
          attributeName="fill"
          values="rgba(255,255,255,1);rgba(255,255,255,0)"
          fill="freeze"
          dur="2s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1"
        />
        <animate
          begin="book__spade_foreground.click"
          attributeName="fill"
          values="rgba(255,255,255,0);rgba(255,255,255,1)"
          fill="freeze"
          dur="2s"
          calcMode="spline"
          keySplines="0.5 0 0.5 1"
        />
        <textPath
          id="book__spade_text"
          href="#book__defs_spade_text_path"
          startOffset="320"
          textLength="310"
        >
          <animate
            begin="close.click"
            attributeName="textLength"
            values="220;310"
            fill="freeze"
            dur="3s"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.5 0 0.5 1"
          />
          <animate
            begin="book__spade_foreground.click + 2s"
            attributeName="textLength"
            values="310;220"
            fill="freeze"
            dur="3s"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.5 0 0.5 1"
          />
          <animate
            begin="close.click"
            attributeName="startOffset"
            values="0;320"
            fill="freeze"
            dur="3s"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.5 0 0.5 1"
          />
          <animate
            begin="book__spade_foreground.click + 2s"
            attributeName="startOffset"
            values="320;0"
            fill="freeze"
            dur="3s"
            calcMode="spline"
            keyTimes="0;1"
            keySplines="0.5 0 0.5 1"
          />
          あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        </textPath>
      </text>

      <g transform="translate(0, 0)">
        <g transform="scale(0.1)" transform-origin="50 85">
          <animateTransform
            begin="close.click"
            attributeName="transform"
            type="scale"
            values="1;0.1"
            fill="freeze"
            dur="2s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1"
          />
          <animateTransform
            begin="book__heart_foreground.click"
            attributeName="transform"
            type="scale"
            values="0.1;1"
            fill="freeze"
            dur="2s"
            calcMode="spline"
            keySplines="0.5 0 0.5 1"
          />
          <use
            id="book__heart"
            href="#book__defs_spade"
            stroke="rgba(255,255,255,1)"
            stroke-width="6"
            fill="rgba(240,0,0,1)"
            clip-path="url(#book__defs_spade_clip)"
          >
            <animate
              begin="close.click"
              attributeName="stroke"
              values="rgba(255,255,255,0);rgba(255,255,255,1)"
              fill="freeze"
              dur="2s"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
            />
            <animate
              begin="book__heart_foreground.click"
              attributeName="stroke"
              values="rgba(255,255,255,1);rgba(255,255,255,0)"
              fill="freeze"
              dur="2s"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
            />
          </use>
          <use
            id="book__heart_foreground"
            href="#book__defs_spade"
            stroke="transparent"
            stroke-width="6"
            stroke-linejoin="round"
            fill="transparent"
          >
            <set
              begin="book__heart_foreground.click"
              end="close.click"
              attributeName="display"
              to="none"
              fill="remove"
            />
          </use>
          <text
            fill="rgba(255,255,255,0)"
            dy="-0.8"
            font-family="PlemolJP"
            font-size="3"
            display="none"
          >
            <set
              begin="book__heart_foreground.click"
              end="close.click + 3s"
              attributeName="display"
              to="inline"
              fill="remove"
            />
            <animate
              begin="book__heart_foreground.click"
              attributeName="fill"
              values="rgba(255,255,255,1);rgba(255,255,255,0)"
              fill="freeze"
              dur="2s"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
            />
            <animate
              begin="book__heart_foreground.click"
              attributeName="fill"
              values="rgba(255,255,255,0);rgba(255,255,255,1)"
              fill="freeze"
              dur="2s"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
            />
            <textPath
              id="book__spade_text"
              href="#book__defs_spade_text_path"
              startOffset="320"
              textLength="310"
            >
              <animate
                begin="close.click"
                attributeName="textLength"
                values="220;310"
                fill="freeze"
                dur="3s"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.5 0 0.5 1"
              />
              <animate
                begin="book__heart_foreground.click + 2s"
                attributeName="textLength"
                values="310;220"
                fill="freeze"
                dur="3s"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.5 0 0.5 1"
              />
              <animate
                begin="close.click"
                attributeName="startOffset"
                values="0;320"
                fill="freeze"
                dur="3s"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.5 0 0.5 1"
              />
              <animate
                begin="book__heart_foreground.click + 2s"
                attributeName="startOffset"
                values="320;0"
                fill="freeze"
                dur="3s"
                calcMode="spline"
                keyTimes="0;1"
                keySplines="0.5 0 0.5 1"
              />
              あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
            </textPath>
          </text>
        </g>
      </g>
    </g>
  </svg>
</template>

<style scoped>
#book {
  background-color: lightgray;
}
</style>
