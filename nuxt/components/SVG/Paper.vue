<template>
  <svg>
    <filter id="roughpaper">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.4"
        result="noise"
        numOctaves="5"
      />

      <feDiffuseLighting in="noise" lighting-color="rgba(235, 232, 217)" surfaceScale="1">
        <feDistantLight azimuth="45" elevation="60" />
      </feDiffuseLighting>
    </filter>
  </svg>
  <!-- <div></div> -->
</template>
