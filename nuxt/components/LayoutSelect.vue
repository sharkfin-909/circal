<template>
  <div class="flex items-center justify-between gap-4 w-[200px]">
    <div>layout:</div>
    <div>
      <USelectMenu
        class="w-full"
        v-model="selected"
        :items="layouts"
        size="xs"
        :ui="{
          trailingIcon:
            'group-data-[state=open]:rotate-180 transition-transform duration-200',
        }"
        :searchInput="false"
        @update:modelValue="setLayout()"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({});
  import { useCircalStore } from "~/stores/circal.ts";

  const store = useCircalStore();

  const layouts = [
    {
      label: "landscape",
      value: 594 / 420,
    },
    {
      label: "portrait",
      value: 420 / 594,
    },
  ];
  const selected = ref({});
  selected.value = store.currentLayout;
  const setLayout = () => {
    store.design.layout = selected.value;
    store.setHeightAndWidth(window.innerHeight);
  };
</script>
