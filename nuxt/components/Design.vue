<template>
  <!-- frame -->
  <div
    :style="frameStyles"
    class="relative w-full h-full flex flex-col items-center justify-center frame shadow-2xl  "
  >
    <div
      class="relative w-full h-full flex items-center justify-center overflow-hidden "
    >
      <!-- paper -->
      <SVGPaper
        class="absolute w-full h-full opacity-80 paper "
      />
      <!-- design -->
      <div
        class="relative w-full h-full flex flex-col items-center justify-center shadow-2xl "
        :style="canvasStyles"
      >
        <ElementsBackground />
        <ElementsOuterCircle />
        <ElementsMonthNames />
        <ElementsDateItems />
        <ElementsCenter /> 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCircalStore } from "~/stores/circal";
  const store = useCircalStore();


  onMounted(() => {
    // Get viewport height and calculate canvas w & h in pixels
    store.setHeightAndWidth(window.innerHeight );
    //  set listener in case viewport changes
    // window.addEventListener("resize", store.setHeightAndWidth(window.innerHeight));
  });



  const frameStyles = computed(() => ({
    height: `${store.height + 100}px`,
    width: `${store.width + 100}px`,
  }));

  const canvasStyles = computed(() => ({
    height: `${store.height}px`,
    width: `${store.width}px`,
  }));
</script>
