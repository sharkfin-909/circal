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
        <USelectMenu
          v-model="selected"
          :items="control.options"
          class="w-full px-"
          size="xs"
          :searchInput="false"
          arrow
          @update:modelValue="setValue"
          variant="ghost"
        >
          <span
            v-if="control.selectType === 'opacities'"
            class="size-3 rounded-full block bg-stone-700"
            :style="`opacity:${selected?.value ? selected?.tone : ''}`"
          ></span>
          <span>{{ selected?.label }}</span>
          <template v-if="control.selectType === ''" #item-leading="modelValue">
            <span
              class="p-2 w-2 h-2 rounded-full block bg-stone-700"
              :style="`opacity:${modelValue?.item?.tone}`"
            ></span>
          </template>
        </USelectMenu>
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
  const selected = ref({
    label: "",
    value: "",
    tone: "",
  });

  let storeValue = store.getDesignValue(
    uiStore.selectedElement.element,
    props.control.path
  );

  selected.value = props.control.options.find(
    (item) => item.value == storeValue
  );

  const setValue = () => {
    store.setDesignValue(
      uiStore.selectedElement.element,
      props.control.path,
      selected.value.value
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
