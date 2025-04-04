import { defineStore } from "pinia";
import elementPanels from "~/assets/elementPanels";
import { type Panel } from "~/assets/elementPanels";

export const useUiStore = defineStore("ui", () => {
  const selectedElement = ref(elementPanels[0]);
  const hoveredElement = ref("");
  const presentMode = ref(false);

  const setPanel = (element: string) => {
    selectedElement.value = elementPanels.find(
      (panel: Panel) => panel.element === element
    );
    presentMode.value = false;
  };

  const getPanel = computed(() => selectedElement.value);

  setPanel("background");

  const setHover = (hovered: string) => {
    hoveredElement.value = hovered;
  };

  const unsetHover = () => {
    hoveredElement.value = "";
  };

  const inactiveStyle = {
    opacity: "0.3",
    pointerEvents: "none",
  };
  
  const hideOnPresent = computed(() => ({
    display: presentMode.value ? "none" : "flex",
  }));

  return {
    selectedElement,
    setPanel,
    getPanel,
    hoveredElement,
    setHover,
    unsetHover,
    inactiveStyle,
    presentMode,
    hideOnPresent,
  };
});
