<template>
  <div
    class="flex items-center justify-center gap-2 rounded-md py-1 px-2 bg-(--ui-bg-muted) hover:bg-(--ui-bg-accented) cursor-pointer"
    @click="toggle"
  >
    <div class="relative w-[18px] h-[18px]">
      <UIcon
        v-if="store.getDesignValue(control.element, 'active') === false"
        name="material-symbols:power-settings-circle-outline"
        class="absolute inset-0 size-5"
      />
      <UIcon
        v-if="store.getDesignValue(control.element, 'active') === true"
        name="material-symbols:power-settings-circle"
        class="absolute inset-0 size-5 "
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
  import { useCircalStore } from "~/stores/circal";
  const store = useCircalStore();
  const bool = ref(null);

  bool.value = store.getDesignValue(props.control.element, "active");

  const toggle = () => {
    bool.value = !bool.value;

    store.setDesignValue(props.control.element, "active", bool.value);
  };
</script>
