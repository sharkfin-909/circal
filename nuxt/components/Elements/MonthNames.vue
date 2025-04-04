<template>
  <!-- outer highlight -->
  <div
    class="absolute inset-0 flex items-center justify-center pointer-events-none"
  >
    <div
      class="rounded-full"
      :style="highlighted ? styles.outerHighlight : ''"
    ></div>
  </div>
  <!-- inner highlight -->
  <div
    class="absolute inset-0 flex items-center justify-center pointer-events-none"
  >
    <div
      class="rounded-full"
      :style="highlighted ? styles.innerHighlight : ''"
    ></div>
  </div>
  <!-- months -->
  <div
    :style="styles.months"
    class="absolute flex items-center justify-center cursor-pointer"
    @click.stop="uiStore.setPanel('monthNames')"
    @mouseover="uiStore.setHover('monthNames')"
    @mouseleave="uiStore.unsetHover()"
  >
    <div
      v-if="store.width"
      v-for="(month, index) in months"
      :key="index"
      class="absolute"
      :style="getMonthPosition(index)"
    >
      <ElementsCurvedName :month="month" :index="index" class="" />
    </div>
  </div>
</template>

<script setup>
  import { useCircalStore } from "~/stores/circal.ts";
  const store = useCircalStore();
  import { storeToRefs } from "pinia";
  const { design } = storeToRefs(store);
  import { useUiStore } from "~/stores/ui.ts";
  const uiStore = useUiStore();
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const getMonthPosition = (index) => {
    const radius = (store.width * design.value.monthNames.ratio) / 100 / 2;

    const angle = (index * 30 - 90) * (Math.PI / 180); // Convert to radians, start at top
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    let rotate = index > 3 && index < 9 ? index * 30 + 180 : index * 30;
    return {
      radius: radius,
      transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
    };
  };

  const styles = reactive({});
  const radius = computed(() =>
    Math.floor(store.width * (design.value.monthNames.ratio / 100))
  );

  styles.outerHighlight = computed(() => ({
    height: `${radius.value + 25}px`,
    width: `${radius.value + 25}px`,
    borderWidth: uiStore.presentMode ? 0 : store.highlightedBorderWidth,
    borderStyle: store.highlightedBorderStyle,
    borderColor:
      uiStore.selectedElement?.element === "monthNames"
        ? store.activeBorderColor
        : store.hoveredBorderColor,
  }));

  styles.innerHighlight = computed(() => ({
    height: `${radius.value - 16}px`,
    width: `${radius.value - 16}px`,
    borderWidth: uiStore.presentMode ? 0 : store.highlightedBorderWidth,
    borderStyle: store.highlightedBorderStyle,
    borderColor:
      uiStore.selectedElement?.element === "monthNames"
        ? store.activeBorderColor
        : store.hoveredBorderColor,
  }));
  styles.months = computed(() => ({
    display: store.design.monthNames.active ? "flex" : "none",
    width: `${radius}px`,
    height: `${radius}px`,
    opacity: store.design.monthNames.opacity,
    color: store.design.monthNames.color,
    fontSize: String(store.design.monthNames.fontSize) + "px",
    fontFamily: store.design.monthNames.fontFamily,
  }));

  const highlighted = computed(
    () =>
      uiStore.hoveredElement === "monthNames" ||
      uiStore.selectedElement?.element === "monthNames"
  );

  onMounted(() => {
    // make the font available
    store.addFontLinkToHead(store.design.monthNames.fontFamily.link);
    // trigger store subscription on first render:
    store.ticker++;
  });
</script>
