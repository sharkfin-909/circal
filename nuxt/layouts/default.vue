<template>
  <div class="min-h-screen bg-(--ui-bg)">
    <div class="absolute h-full flex flex-col">
      <NuxtLink to="/">
        <div class="p-5 text-center text-xs cursor-pointer">CIRCAL</div>
      </NuxtLink>
      <Menu />
    </div>
    <div class="grid grid-rows-7 w-full h-full">
      <div class="row-span-1 grid grid-cols-16 w-full">
        <div class="col-span-15" name="toolbar">
          <slot name="toolbar" />
        </div>
        <div class="flex justify-center items-center">
          <DarkToggle class="col-span-1" />
        </div>
      </div>
      <div class="row-span-6">
        <slot />
      </div>
    </div>
  </div>
</template>
