<template>
  <UApp>
    <Transition name="page" >
      <NuxtLayout>
        <NuxtPage :key="$route.fullPath" class="select-none" />
      </NuxtLayout>
    </Transition>
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
