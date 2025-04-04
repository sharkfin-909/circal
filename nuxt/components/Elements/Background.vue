<template>
  <!--background-->
  <div
    @click.stop="uiStore.setPanel('background')"
    @mouseover="uiStore.setHover('background')"
    @mouseleave="uiStore.unsetHover()"
    class="relative overflow-hidden h-full w-full cursor-pointer"
    :style="styles.master"
  >
    <!-- background image -->
    <img
      v-show="design.background.image.active && design.background.active"
      :style="styles.image"
      class="absolute inset-0 w-full h-full object-cover"
      :src="store.backgroundImage"
    />
    <!-- background  overlay -->
    <div
      class="absolute inset-0 w-full h-full pointer-events-none"
      :style="styles.overlay"
    ></div>
  </div>
  <!-- background highlight -->
  <div class="absolute inset-0 w-full h-full pointer-events-none">
    <div
      class="h-full w-full rounded-xl pointer-events-none"
      :style="highlighted ? styles.highlight : ''"
    ></div>
  </div>
</template>

<script setup>
  import { useCircalStore } from "~/stores/circal.ts";
  const store = useCircalStore();
  import { storeToRefs } from "pinia";
  const { design } = storeToRefs(store);
  import { useUiStore } from "~/stores/ui.ts";
  const uiStore = useUiStore();
  const styles = reactive({});

  uiStore.$subscribe((m, state) => {
    styles.highlight = {
      borderWidth: uiStore.presentMode ? 0 : store.highlightedBorderWidth,
      borderStyle: store.highlightedBorderStyle,
      borderColor:
        uiStore.selectedElement?.element === "background"
          ? store.activeBorderColor
          : store.hoveredBorderColor,
    };
  });

  store.$subscribe((m, state) => {
    styles.overlay = {
      display:
        state.design.background.overlay.active && state.design.background.active
          ? "block"
          : "none",
      backgroundColor: state.design.background.overlay.color,
      background: state.design.background.overlay.radialGradient.active
        ? `radial-gradient(circle,${state.design.background.overlay.radialGradient.centerColor},${state.design.background.overlay.color} ${state.design.background.overlay.radialGradient.centerSize}%)`
        : state.design.background.overlay.color,
      opacity: state.design.background.overlay.opacity,
      backdropFilter: `blur(${state.design.background.overlay.backdropBlur}px)`,
    };
    styles.bg = {
      display: state.design.background.active ? "block" : "none",
    };
    styles.image = {
      opacity: state.design.background.image.opacity,
    };
  });

  const highlighted = computed(
    () =>
      uiStore.hoveredElement === "background" ||
      uiStore.selectedElement?.element === "background"
  );
  onMounted(() => {
    // trigger store subscription on first render:
    store.ticker++;
  });
</script>
