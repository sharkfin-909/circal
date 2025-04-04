<template>
  <ControlsLayout
    :style="shouldBeActive ? {} : uiStore.inactiveStyle"
    :labelAlign="labelAlign"
  >
    <template v-slot:label>
      {{ control.label }}
    </template>
    <template v-slot:control>
      <UPopover class="w-full" v-model:open="open" size="">
        <UButton color="neutral" variant="ghost" size="md">
          <template #leading>
            <div class="w-full flex justify-between pl-1 pr-2">
              <span :style="chip" class="size-3 rounded-xl"></span>
              <UIcon name="ph:caret-down" class="size-3 text-(--ui-text)" />
            </div>
          </template>
        </UButton>

        <template #content>
          <div
            class="flex flex-col justify-around items-center bg-(--ui-bg-accented) rounded-xl"
          >
            <UColorPicker
              v-model="color"
              class="px-7 pt-9"
              @update:modelValue="storeRestoreValue"
            />
            <div class="w-full flex justify-evenly py-7">
              <UButton
                class=""
                label="preview"
                color="neutral"
                variant="outline"
                @click.stop="previewColor()"
              >
              </UButton>
              <UButton
                class=""
                label="cancel"
                color="neutral"
                variant="outline"
                @click.stop="cancel()"
              >
              </UButton>
              <UButton
                class=""
                label="apply"
                color="neutral"
                variant="outline"
                @click.stop="setColor()"
              >
              </UButton>
            </div>
          </div>
        </template>
      </UPopover>
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
  import designData from "~/assets/defaultDesign";
  import { useCircalStore } from "~/stores/circal";
  import { useUiStore } from "~/stores/ui";
  const store = useCircalStore();
  const uiStore = useUiStore();
  const open = ref(false);
  const chip = computed(() => ({ backgroundColor: color.value }));
  let restore = {};
  const storeRestoreValue = () => {
    restore = store.getDesignValue(
      uiStore.selectedElement.element,
      props.control.path
    );
  };

  const color = ref(null);

  color.value = store.getDesignValue(
    uiStore.selectedElement.element,
    props.control.path
  );

  const setColor = () => {
    open.value = false;
    store.setDesignValue(
      uiStore.selectedElement.element,
      props.control.path,
      color.value
    );
  };
  const previewColor = () => {
    store.setDesignValue(
      uiStore.selectedElement.element,
      props.control.path,
      color.value
    );
  };
  const cancel = () => {
    store.setDesignValue(
      uiStore.selectedElement.element,
      props.control.path,
      restore
    );
    color.value = restore;
    open.value = false;
  };

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
