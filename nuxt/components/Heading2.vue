<template>
  <h2 class="w-full text-xl text-center text-bold">{{ text }}</h2>
</template>

<script setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
  });
</script>
