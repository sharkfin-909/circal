<template>
  <ControlsLayout
    :style="shouldBeActive ? {} : uiStore.inactiveStyle"
    :labelAlign="labelAlign"
  >
    <template v-slot:label>
      <div :class="{ 'text-end': control.showFlagPath !== '' }">
        {{ control.label }}
      </div>
    </template>

    <template v-slot:control>
      <div class="cursor-pointer">
        <UInputNumber
          v-model="number"
          :items="control.options"
          class="w-full"
          size="xs"
          @update:modelValue="setValue"
          highlight="false"
          variant="ghost"
        >
          <template #decrement class="cursor-pointer">
            <UButton
              size="xs"
              variant="ghost"
              icon="i-lucide-minus"
              class="cursor-pointer"
            />
          </template>
          <template #increment class="cursor-pointer">
            <UButton
              size="xs"
              variant="ghost"
              icon="i-lucide-plus"
              class="cursor-pointer"
            />
          </template>
        </UInputNumber>
      </div>
    </template>
  </ControlsLayout>
</template>

<script setup>
  const props = defineProps({
    control: {
      type: Object,
      required: true,
      labelAlign: { String, required: true },
    },
  });
  import { UInputNumber } from "#components";
  import { useCircalStore } from "~/stores/circal.ts";
  import { useUiStore } from "~/stores/ui.ts";
  const store = useCircalStore();
  const uiStore = useUiStore();
  const number = ref(null);

  number.value = store.getDesignValue(
    uiStore.selectedElement.element,
    props.control.path
  );

  const setValue = () => {
    store.setDesignValue(
      uiStore.selectedElement.element,
      props.control.path,
      number.value
    );
  };
  const shouldBeActive = computed(() => {
    if (
      !store.design[uiStore.selectedElement.element].active &&
      props.control.master === false
    ) {
      return false;
    }
    // check for any showflagpaths and compute result if exist
    if (props.control.showFlagPaths.length > 0) {
      let vals = [];
      props.control.showFlagPaths.forEach((item) => {
        vals.push(store.getDesignValue(uiStore.selectedElement.element, item));
      });
      if (vals.every((item) => item === true)) return true;
    }

    // check for any hideflagpaths and compute result if exist

    if (props.control.hideFlagPaths.length > 0) {
      let vals = [];
      props.control.hideFlagPaths.forEach((item) => {
        vals.push(store.getDesignValue(uiStore.selectedElement.element, item));
      });
      if (vals.every((item) => item === true)) return false;
    }

    return true;
  });
</script>
