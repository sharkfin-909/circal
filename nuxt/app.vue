<template>
  <UApp>
    <NuxtLayout>
    <Transition name="page">
      <NuxtPage class="select-none" />
    </Transition>
    </NuxtLayout>
  </UApp>
</template>
<style>
  /* Route transition */
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s ease;
  }

  .page-enter-from {
    opacity: 0;
    /* transform: translateY(10px); */
  }

  .page-enter-to {
    opacity: 1;
    /* transform: translateY(0); */
  }

  .page-leave-from {
    opacity: 1;
    /* transform: translateY(0); */
  }

  .page-leave-to {
    opacity: 0;
    /* transform: translateY(-10px); */
  }
</style>
