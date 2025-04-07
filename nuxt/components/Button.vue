<template>
  <NuxtLink :to="to">
    <UButton class="w-70 cursor-pointer" :type="type" block>{{ text }}</UButton>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    to: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
    },
  });
</script>
