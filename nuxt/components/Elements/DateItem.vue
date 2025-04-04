<template>
  <!-- highlight -->
  <div :style="highlighted ? styles.highlight : ''" class="rounded-xl">
    <!-- date item container -->
    <div
      :style="styles.item"
      class="gap-1 flex flex-col items-center justify-center p-2 rounded-xl"
    >
      <!-- name -->
      <span :style="styles.text" class="text-center max-w-24">{{
        item.name
      }}</span>
      <!-- avatar -->
      <div :style="styles.avatar" class="overflow-hidden">
        <img :src="item.imageUrl" class="object-cover h-full w-full" />
      </div>
      <!-- avatar border -->
      <div :style="styles.avatarBorder" class="absolute overflow-hidden"></div>

      <!-- date -->
      <span :style="styles.text">{{ formatDate(item.date) }}</span>
      <div class="absolute"></div>
    </div>
  </div>
</template>


<script setup lang="ts">
  import { useCircalStore } from "~/stores/circal";
  const store = useCircalStore();
  import { useUiStore } from "~/stores/ui";
  const uiStore = useUiStore();
  import { hexToRgb, rgbToRgba } from "~/assets/helpers/colorStrings";

  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });

  const styles = reactive({
    highlight: {},
    avatar: {},
    avatarBorder: {},
    text: {},
    item: {},
  });

  uiStore.$subscribe((m, state) => {
    styles.highlight = {
      borderWidth: uiStore.presentMode ? 0 : store.highlightedBorderWidth,
      borderStyle: store.highlightedBorderStyle,
      borderColor:
        uiStore.selectedElement?.element === "dateItems"
          ? store.activeBorderColor
          : store.hoveredBorderColor,
    };
  });

  store.$subscribe((mutation, state) => {
    styles.avatar = {
      display: state.design.dateItems.avatar ? "block" : "none",
      width: state.design.dateItems.avatarSize + "px",
      height: state.design.dateItems.avatarSize + "px",
      border: `${state.design.dateItems.avatarBorder.width} solid rgba(254, 254, 254,0)`,
      borderRadius: state.design.dateItems.avatarBorder.radius + "px",
    };
    styles.avatarBorder = {
      display:
        state.design.dateItems.avatar &&
        state.design.dateItems.avatarBorder.active
          ? "block"
          : "none",
      width: state.design.dateItems.avatarSize + "px",
      height: state.design.dateItems.avatarSize + "px",
      border: `${state.design.dateItems.avatarBorder.width}px solid ${state.design.dateItems.avatarBorder.color}`,
      borderRadius: state.design.dateItems.avatarBorder.radius + "px",
      opacity: state.design.dateItems.avatarBorder.opacity,
    };
    styles.text = {
      fontFamily: state.design.dateItems.text.fontFamily.name,
      fontSize: `${state.design.dateItems.text.fontSize}px`,
      color: state.design.dateItems.text.color,
      opacity: "1",
    };
    let rgbaString = rgbToRgba(
      hexToRgb(state.design.dateItems.itemBorder.color),
      state.design.dateItems.itemBorder.opacity
    );
    let itemColor = rgbToRgba(
      hexToRgb(state.design.dateItems.bgColor.color),
      state.design.dateItems.bgColor.opacity
    );
    styles.item = {
      display: state.design.dateItems.active ? "flex" : "none",
      borderWidth: state.design.dateItems.itemBorder.active
        ? `${state.design.dateItems.itemBorder.width}px`
        : "",
      borderColor: rgbaString,
      borderRadius: state.design.dateItems.itemBorder.radius + "px",
      backgroundColor: state.design.dateItems.bgColor.active ? itemColor : "",
      backdropFilter: state.design.dateItems.bgColor.active
        ? `blur(${state.design.dateItems.bgColor.backdropBlur}px)`
        : "",
    };
  });

  const formatDate = (date: string) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString("default", { month: "long" }); // Get month as word
    return `${day} ${month}`;
  };

  const highlighted = computed(
    () =>
      uiStore.hoveredElement === "dateItems" ||
      uiStore.selectedElement?.element === "dateItems"
  );

  // trigger store subscription on first render:
  onMounted(() => {
    store.ticker++;
  });
</script>
