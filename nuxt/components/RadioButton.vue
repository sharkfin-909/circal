<template>
  <div
    class="flex items-center justify-center gap-2 rounded-md py-1 px-2 bg-(--ui-bg-muted) hover:bg-(--ui-bg-accented) cursor-pointer"
  >
    <div
      class="relative w-[18px] h-[18px]"
      @click="setElement(control.element)"
    >
      <UIcon
        v-if="uiStore.getPanel.element === control.element"
        name="material-symbols-light:edit-square"
        class="absolute inset-0 size-5 text-(--ui-text-highlighted)"
      />
      <UIcon
        v-if="uiStore.getPanel.element !== control.element"
        name="material-symbols-light:edit-square-outline"
        class="absolute inset-0 size-5"
      />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    control: {
      type: Object,
      required: true,
    },
  });

  import { UIcon } from "#components";
  import { useUiStore } from "~/stores/ui";
  const uiStore = useUiStore();

  const setElement = (el) => {
    uiStore.setPanel(el);
  };
</script>
