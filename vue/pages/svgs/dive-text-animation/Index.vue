<template>
  <svg id="book" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path id="book__spade">
        <animate
          attributeName="d"
          values="
              M50 10Q35 27 20 40C-10 66 30 100 50 70L40 90L60 90L50 70C70 100 110 66 80 40Q65 27 50 10Z;
              M5 15L45 15M5 25L45 25M5 35L45 35M5 45L45 45M5 55L45 55M5 65L45 65Z
            "
          dur="10s"
          repeatCount="indefinite"
        />
      </path>
    </defs>
    <use
      stroke="black"
      stroke-width="1"
      stroke-dasharray="50 50"
      fill="none"
      href="#book__spade"
    />
    <text fill="white" font-family="PlemolJP">
      <animate
        attributeName="font-size"
        values="1;7;7"
        dur="10s"
        repeatCount="indefinite"
      />
      <textPath href="#book__spade" textLength="300">
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
      </textPath>
    </text>
  </svg>
</template>

<style scoped>
#book {
  background-color: gray;
}
</style>
