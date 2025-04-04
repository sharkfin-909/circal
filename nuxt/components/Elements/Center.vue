<template>
  <!-- highlight  -->
  <div
    :style="highlighted ? styles.highlighted : ''"
    class="absolute rounded-full pointer-events-none"
  ></div>
  <!-- background circle  -->

  <div
    :style="styles.circle"
    class="absolute rounded-full cursor-pointer flex items-center justify-center"
    @click.stop="uiStore.setPanel('center')"
    @mouseover="uiStore.setHover('center')"
    @mouseleave="uiStore.unsetHover()"
  >
    <span class="">
      {{ store.design.center.copy }}
    </span>
  </div>
</template>

<script setup>
  import { useCircalStore } from "~/stores/circal.ts";
  const store = useCircalStore();
  import { useUiStore } from "~/stores/ui.ts";
  const uiStore = useUiStore();

  import { rgbToRgba, hexToRgb } from "~/assets/helpers/colorStrings.ts";
  const styles = reactive({
    circle: {},
    highlighted: {},
  });

  uiStore.$subscribe((m, state) => {
    let radius = Math.floor(store.width * store.design.center.ratio) / 100 / 2;
    styles.highlighted = {
      height: `${radius + 20}px`,
      width: `${radius + 20}px`,
      borderWidth: uiStore.presentMode ? 0 : store.highlightedBorderWidth,
      borderStyle: store.highlightedBorderStyle,
      borderColor:
        uiStore.selectedElement?.element === "center"
          ? store.activeBorderColor
          : store.hoveredBorderColor,
    };
  });

  store.$subscribe((mutation, state) => {
    let bgColor = rgbToRgba(
      hexToRgb(store.design.center.background.color),
      store.design.center.background.opacity
    );
    let borderColor = rgbToRgba(
      hexToRgb(store.design.center.border.color),
      store.design.center.border.opacity
    );
    let textColor = rgbToRgba(
      hexToRgb(store.design.center.text.color),
      store.design.center.text.opacity
    );
    let radius = Math.floor(store.width * store.design.center.ratio) / 100;
    try {
      styles.circle = {
        display: state.design.center.active ? "flex" : "none",
        height: `${radius}px`,
        width: `${radius}px`,
        backgroundColor: bgColor,
        border: state.design.center.border.active
          ? `${state.design.center.border.width}px solid ${borderColor}`
          : "",
        backgroundImage: state.design.background.imageActive
          ? state.backgroundImage
          : "",
        fontFamily: state.design.center.text.fontFamily.name,
        fontSize: `${state.design.center.text.fontSize}px`,
        color: textColor,
      };
    } catch (e) {
      console.log(e);
    }
  });

  const highlighted = computed(
    () =>
      uiStore.hoveredElement === "center" ||
      uiStore.selectedElement?.element === "center"
  );

  onMounted(() => {
    // make the font available
    store.addFontLinkToHead(store.design.center.text.fontFamily.link);
    // trigger store subscription on first render:
    store.ticker++;
  });
</script>
