<template>
  <ControlsLayout
    :style="shouldBeActive ? {} : uiStore.inactiveStyle"
    :labelAlign="labelAlign"
  >
    <template v-slot:label>
      <div>
        {{ control.label }}
      </div>
    </template>

    <template v-slot:control>
      <div class="">
        <UInput
          v-model="copy"
          class="w-full"
          size="xs"
          @update:modelValue="setValue"
          variant="ghost"
          placeholder="enter text..."
        >
        </UInput>
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
  import { useCircalStore } from "~/stores/circal";
  import { useUiStore } from "~/stores/ui";

  const store = useCircalStore();
  const uiStore = useUiStore();
  const copy = ref("");

  let storeValue = store.getDesignValue(
    uiStore.selectedElement.element,
    props.control.path
  );


  const setValue = () => {
    store.setDesignValue(
      uiStore.selectedElement.element,
      props.control.path,
      copy.value
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
