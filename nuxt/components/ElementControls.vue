<template>
  <div class="w-full flex justify-around py-4" :style="uiStore.hideOnPresent">
    <div
      v-for="control in controls"
      class="w-[100px] bg-(--ui-bg-muted) pt-2 pb-1  rounded-xl shadow-2xl text-xs text-center flex flex-col justify-center"
      :class="{
        'bg-stone-200': uiStore.getPanel.element === control.element,
      }"
    >
      <div class="flex justify-evenly w-full">
        <RadioButton :control="control" />
        <ElementSwitch :control="control" />
      </div>
      <span> {{ control.label }}</span>
    </div>
  </div>
</template>

<script setup>
  import { useUiStore } from "~/stores/ui";
  const uiStore = useUiStore();
  const controls = [
    {
      element: "background",
      label: "background",
    },
    {
      element: "outerCircle",
      label: "circle",
    },
    {
      element: "monthNames",
      label: "month names",
    },
    {
      element: "dateItems",
      label: "date items",
    },
    {
      element: "center",
      label: "center",
    },
  ];
</script>
