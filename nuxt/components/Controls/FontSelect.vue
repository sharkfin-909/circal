<template>
  <ControlsLayout
    :style="shouldBeActive ? {} : uiStore.inactiveStyle"
    :labelAlign="labelAlign"
  >
    <template v-slot:label>
      <span>{{ control.label }}</span>
    </template>
    <template v-slot:control>
      <div class="w-full">
        <USelectMenu
          class="w-full"
          v-model="selected"
          :items="fontLinks"
          size="xs"
          :ui="{
            trailingIcon:
              'group-data-[state=open]:rotate-180 transition-transform duration-200',
          }"
          :searchInput="true"
          @update:modelValue="selectFont"
          :loading="loading"
          variant="ghost"
        />
      </div>
    </template>
  </ControlsLayout>
</template>

<script setup>
  const props = defineProps({
    control: {
      type: Object,
      required: true,
    },
    labelAlign: { String, required: true },
  });
  import { useCircalStore } from "~/stores/circal.ts";
  const store = useCircalStore();
  import { useUiStore } from "~/stores/ui.ts";
  const uiStore = useUiStore();
  import { storeToRefs } from "pinia";
  const loading = ref(false);
  const { design } = storeToRefs(store);
  const { selectedElement } = storeToRefs(uiStore);
  import fontLinks from "~/assets/fontLinks.ts";

  const selectFont = () => {
    store.addFontLinkToHead(selected.value.value);
    store.setDesignValue(selectedElement.value.element, props.control.path, {
      name: selected.value.label,
      link: selected.value.value,
    });
  };
  // Reactive value for v-model
  const selected = ref(null);
  // Create a computed that checks if both stores are ready
  selected.value = computed(() => {
    const val = store.getDesignValue(
      selectedElement.value.element,
      props.control.path
    );
    return val.name;
  });

  const shouldBeActive = computed(() => {
    if (!store.design[uiStore.selectedElement.element].active) {
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
