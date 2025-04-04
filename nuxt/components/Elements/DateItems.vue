<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    :style="getPosition(item.date)"
    class="absolute"
  >
    <ElementsDateItem
      :item="item"
      @mouseover="uiStore.setHover('dateItems')"
      @mouseleave="uiStore.unsetHover()"
      @click.stop="uiStore.setPanel('dateItems')"
      class="cursor-pointer"
    />
  </div>
</template>

<script setup>
  import { useCircalStore } from "~/stores/circal.ts";
  const store = useCircalStore();
  import { useUiStore } from "~/stores/ui.ts";
  const uiStore = useUiStore();

  const items = computed(() => store.dateItems);

  const getPosition = (date) => {
    const radius = (store.width * store.design.dateItems.ratio) / 100 / 2;
    const dayOfYear = getDayOfYear(date);
    const angle = (dayOfYear / 365) * 2 * Math.PI - Math.PI / 2;
    const x = Math.floor(radius * Math.cos(angle));
    const y = Math.floor(radius * Math.sin(angle));
    return {
      transform: `translate(${x}px , ${y}px )`,
    };
  };

  const getDayOfYear = (date) => {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
  };

  onMounted(() => {
    // make the font available
    store.addFontLinkToHead(store.design.dateItems.text.fontFamily.link);
    // trigger store subscription on first render:
    store.ticker++;
  });
</script>
