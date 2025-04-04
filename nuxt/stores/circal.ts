import { defineStore } from "pinia";
import { type Design, createDesign, type DateItem } from "~/assets/designTypes";

export const useCircalStore = defineStore("circal", () => {
  // design json:
  const design = reactive<Design>(createDesign());
  const setDesignJson = function (newDesign: Design) {
    Object.assign(design, newDesign);
  };
  // date items:
  const dateItems = reactive<DateItem[]>([]);
  const setDateItems = function (newItems: DateItem[]) {
    dateItems.length = 0;
    newItems.forEach((item) => dateItems.push(item));
  };
  const getDateItems = computed(() => dateItems);

  // width and height , set by viewport when studio component is mounted
  const width = ref(0);
  const height = ref(0);
  const canvasHeightPercentage = 70;

  // for retrieving the current layout for the design view:
  const currentLayout = computed(() => design.layout);

  // design id and images:
  const designId = ref("");
  const backgroundImage = ref("");
  const centerImage = ref("");

  const setId = (id: string, bgImage: string, cImage: string) => {
    designId.value = id;
    backgroundImage.value = bgImage;
    centerImage.value = cImage;
  };

  const setImages = (bgImage: string, cImage: string) => {
    backgroundImage.value = bgImage;
    centerImage.value = cImage;
  };

  const addFontLinkToHead = (fontLink: string) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = fontLink;
    document.head.appendChild(link);
  };

  const dateItemsHoverElementStyle = computed(() => {
    let diameter = Math.floor(width.value) + 10;
    return {
      width: diameter + "px",
      height: diameter + "px",
    };
  });

  // helper for getting value with string path
  function getDesignValue(element: string, path: string) {
    

    return path
      .split(".")
      .reduce(
        (acc, key) => (acc && acc[key]?.value ? acc[key].value : acc[key]),
        design[element]
      );
  }

  //  set the  value with a string path, and trigger the update to the backend
  function setDesignValue(element: string, path: string, value: any) {
    const keys = path.split(".");
    keys.reduce((acc, key, index) => {
      if (index === keys.length - 1) {
        acc[key] = value;
      } else {
        acc[key] = acc[key] || {}; // Ensure each level exists
      }
      return acc[key]; // Move deeper into the object
    }, design[element]);

    // update backend
    updateDesignJson(designId.value);
  }

  const setHeightAndWidth = (windowHeight: number) => {
    height.value = (windowHeight * canvasHeightPercentage) / 100;
    width.value = Math.floor(height.value) * design.layout.value;
  };

  const highlightedBorderWidth = "4px";
  const highlightedBorderStyle = "dotted";

  const hoveredBorderColor = "rgb(193, 199, 205,0.6)";
  const activeBorderColor = "rgb(152, 179, 224,0.5)";
  // value for incrementing to trigger subscription methods:
  const ticker = ref(0);

  const { updateItem } = useDirectusItems();

  const updateDesignJson = async (id: string) => {
    try {
      await updateItem({
        collection: "designs",
        id: id,
        item: {
          json: design,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return {
    design,
    setDesignJson,
    designId,
    backgroundImage,
    centerImage,
    dateItems,
    setDateItems,
    getDateItems,
    setId,
    setImages,
    addFontLinkToHead,
    width,
    height,
    currentLayout,
    dateItemsHoverElementStyle,
    getDesignValue,
    setDesignValue,
    highlightedBorderStyle,
    hoveredBorderColor,
    activeBorderColor,
    highlightedBorderWidth,
    setHeightAndWidth,
    ticker,
    updateDesignJson,
  };
});
