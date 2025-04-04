<template>
  <!-- outer circle -->
  <div
    :style="styles.circle"
    @mouseover="uiStore.setHover('outerCircle')"
    @mouseleave="uiStore.unsetHover()"
    class="absolute cursor-pointer rounded-full"
    @click.stop="uiStore.setPanel('outerCircle')"
  ></div>
  <!-- highlight -->
  <div
    :style="highlighted ? styles.highlight : ''"
    class="absolute rounded-full pointer-events-none"
  ></div>
</template>

<script setup lang="ts">
  import { useCircalStore } from "~/stores/circal";
  let store = useCircalStore();
  import { useUiStore } from "~/stores/ui";
  let uiStore = useUiStore();
  import { rgbToRgba, hexToRgb } from "~/assets/helpers/colorStrings";
  const styles = reactive({
    highlight: {},
    circle: {},
  });
  const radius = computed(() =>
    Math.floor(store.height * (store.design.outerCircle.ratio / 100))
  );

  styles.highlight = computed(() => ({
    height: `${radius.value + 5}px`,
    width: `${radius.value + 5}px`,
    borderWidth: uiStore.presentMode ? 0 : store.highlightedBorderWidth,
    borderStyle: store.highlightedBorderStyle,
    borderColor:
      uiStore.selectedElement?.element === "outerCircle"
        ? store.activeBorderColor
        : store.hoveredBorderColor,
  }));

  styles.circle = computed(() => {
    const borderColor = rgbToRgba(
      hexToRgb(store.design.outerCircle.border.color),
      store.design.outerCircle.border.opacity
    );
    const bgColor = rgbToRgba(
      hexToRgb(store.design.outerCircle.color),
      store.design.outerCircle.opacity
    );
    return {
      opacity: store.design.outerCircle.active ? "1" : "0",
      height: `${radius.value}px`,
      width: `${radius.value}px`,
      border: store.design.outerCircle.border.active
        ? `${store.design.outerCircle.border.width}px solid ${borderColor}`
        : "",
      backdropFilter: `blur(${store.design.outerCircle.backdropBlur}px)`,
      backgroundColor: bgColor,
    };
  });

  const highlighted = computed(
    () =>
      uiStore.hoveredElement === "outerCircle" ||
      uiStore.selectedElement?.element === "outerCircle"
  );
</script>
