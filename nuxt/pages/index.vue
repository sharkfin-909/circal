<template>
  <UContainer class= "h-screen">
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1 class="text-6xl font-bold text-gray-900">Circal Studio</h1>
          <ColorScheme><USelectMenu v-model="$colorMode.preference" :items="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
    </UCard>
    <div class="flex flex-col items-center justify-between pt-24 pb-40  h-screen ">
    <nuxtLink to="/studio">
        <UButton class=" ">design a circal</UButton>
    </nuxtLink>
    <USelectMenu/>
  </div>
  </UContainer>
</template>

<script setup>

</script>