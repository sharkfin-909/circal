<template>
  <div class="h-screen flex flex-col">
    <!-- header -->
    <div class="h-16 flex justify-between items-center px-2">
      <!-- logo -->
       <NuxtLink to="/">
      <h2  class="cursor-pointer">circal</h2>
      </NuxtLink>
      <DesignSelect :style="uiStore.hideOnPresent" />
      <!-- design title -->
      <!-- <h3 :style="uiStore.hideOnPresent" >{{ store.design.title }}</h3> -->
      <!-- view controls -->
      <div :style="uiStore.hideOnPresent" class="flex gap-3">
        <!-- layout selector -->
        <LayoutSelect />
      </div>
      <!-- right corner -->
      <div class="flex w-30 items-center justify-between gap-3">
        <div class="text-xs flex items-center gap-1">
          <span class="w-10">present:</span>
          <div class="relative w-[28px] h-[15px] text-xs" @click="toggle">
            <SVGToggleOff
              v-if="!uiStore.presentMode"
              class="absolute w-[28px] h-[15px] cursor-pointer"
            />
            <SVGToggleOn
              v-if="uiStore.presentMode"
              class="absolute w-[28px] h-[15px] cursor-pointer"
            />
          </div>
        </div>

        <DarkToggle />
      </div>
    </div>

    <!-- design with control panels to l and r -->
    <div class="grid grid-cols-16 relative">
      <PanelLeft class="col-span-3" />
      <div class="col-span-10 flex flex-col justify-center items-center">
        <Design />
        <ElementControls />
      </div>
      <PanelRight class="col-span-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCircalStore } from "~/stores/circal";

  import { useUiStore } from "~/stores/ui";
  const uiStore = useUiStore();

  const presentText = ref("present");
  const toggle = () => {
    if (!uiStore.presentMode) {
      presentText.value = "normal";
    } else {
      presentText.value = "present";
    }
    uiStore.presentMode = !uiStore.presentMode;
  };
</script>
