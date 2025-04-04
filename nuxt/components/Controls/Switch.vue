<template>
  <div
    class="flex items-center justify-center gap-2 pt-4 pb-2"
    :style="shouldBeActive ? {} : uiStore.inactiveStyle"
  >
    <div
      class="flex items-center justify-center gap-2 rounded-md py-1 px-2 bg-(--ui-bg-muted) hover:bg-(--ui-bg-accented) cursor-pointer"
      @click="toggle"
    >
      <div class="text-xs text-(--ui-text-toned) leading-3.5">
        {{ control.label }}
      </div>
      <div class="relative w-[28px] h-[15px]">
        <SVGToggleOff
          v-if="
            store.getDesignValue(
              uiStore.selectedElement.element,
              control.path
            ) === false
          "
          class="absolute w-[23px] h-[15px]"
        />
        <SVGToggleOn
          v-if="
            store.getDesignValue(
              uiStore.selectedElement.element,
              control.path
            ) === true
          "
          class="absolute w-[23px] h-[15px]"
        />
      </div>
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
  import { useCircalStore } from "~/stores/circal";
  import { useUiStore } from "~/stores/ui";
  const store = useCircalStore();
  const uiStore = useUiStore();
  const bool = ref(null);

  bool.value = store.getDesignValue(
    uiStore.selectedElement.element,
    props.control.path
  );

  const toggle = () => {
    bool.value = !bool.value;

    store.setDesignValue(
      uiStore.selectedElement.element,
      props.control.path,
      bool.value
    );
  };

  const shouldBeActive = computed(() => {
    // check if the element is active,
    if (props.control.master === true) {
      return true;
    } else return store.design[uiStore.selectedElement.element].active;
    // check for any showflagpaths and compute result if exist
  });
</script>
