<template>
  <div
    class="flex flex-col h-full px-12"
    :key="uiStore.selectedElement?.title"
    variant="soft"
  >
    <div :style="uiStore.hideOnPresent" class="flex flex-col gap-1 h-full">
      <div
        v-for="(control, index) in uiStore.selectedElement?.panelRight"
        :key="index"
      >
        <component
          :is="getComponent(control.component)"
          :control="control"
          labelAlign="left"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useUiStore } from "~/stores/ui";
  const uiStore = useUiStore();

  import Select from "./Controls/Select.vue";
  import ColorPicker from "./Controls/ColorPicker.vue";
  import ImageUploader from "./Controls/ImageUploader.vue";
  import FontSelect from "./Controls/FontSelect.vue";
  import Number from "./Controls/Number.vue";
  import Switch from "./Controls/Switch.vue";
  import Input from "./Controls/Input.vue";

  const getComponent = (componentType) => {
    const componentMap = {
      Select,
      ColorPicker,
      ImageUploader,
      FontSelect,
      Number,
      Switch,
      Input,
    };
    return componentMap[componentType] || "div"; // Default to a <div> if no match
  };
</script>
