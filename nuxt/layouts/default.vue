<template>
  <div class="grid min-h-screen bg-(--ui-bg)">
    <Header />
    <div class="h-full flex flex-col items-center justify-center">
      <div
        class="h-full min-w-[50vw] bg-(--ui-bg-elevated) rounded-xl p-20 border-1 border-(--ui-border) shadow-xl"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
