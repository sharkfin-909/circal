<template>
  <h3 class="w-full text-2xl text-center text-bold">{{ text }}</h3>
</template>

<script setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
  });
</script>
