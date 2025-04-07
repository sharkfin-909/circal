<template>
  <div class="min-h-screen bg-(--ui-bg)">
    <div class="absolute h-full flex flex-col">
      <NuxtLink to="/">
        <div class="p-5 text-center text-xs cursor-pointer">CIRCAL</div>
      </NuxtLink>
      <Menu />
    </div>
    <div class="grid grid-rows-7 w-full h-full">
      <header class="row-span-1 w-full flex items-center justify-end">
        <DarkToggle />
      </header>
      <div class="row-span-6">
        <UApp>
          <Transition name="page">
            <NuxtPage class="select-none" />
          </Transition>
        </UApp>
      </div>
    </div>
  </div>
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
