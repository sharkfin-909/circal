<template>
  <div
    class="flex flex-col justify-between gap-1 text-xs"
    style="grid-auto-flow: column"
  >
    <div class="px-1 flex "
    :class="{
          'justify-end': labelAlign === 'right',
        }">
      <slot
        name="label"
        class=""

      ></slot>
    </div>
    <div class="w-full border rounded-md">
      <slot name="control"></slot>
    </div>
    <slot name="switch"></slot>
  </div>
</template>
<script setup>
  const props = defineProps({
    labelAlign: {
      type: String,
      required: true,
    },
  });
</script>
