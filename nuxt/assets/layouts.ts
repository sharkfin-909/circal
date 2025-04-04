import { LayoutNames } from "~/assets/designTypes";

export interface Layout {
  name: LayoutNames;
  ratio: number;
  radii: {
    outerCircle: number;
    monthNames: number;
    dateItems: number;
    center: number;
  };
}

let layouts: Layout[] = Array.from([
  {
    name: LayoutNames.landscapeClock,
    ratio: 594 / 420,
    radii: {
      outerCircle: 19 / 20,
      monthNames: 18 / 30,
      dateItems: 11 / 30,
      center: 1 / 5,
    },
  },
  {
    name: LayoutNames.landscapeCentered,
    ratio: 594 / 420,
    radii: {
      outerCircle: 19 / 20,
      monthNames: 6 / 30,
      dateItems: 13 / 30,
      center: 1 / 5,
    },
  },

  {
    name: LayoutNames.portraitClock,
    ratio: 420 / 594,
    radii: {
      outerCircle: 2 / 3,
      monthNames: 5 / 6,
      dateItems: 16 / 30,
      center: 5 / 30,
    },
  },

  {
    name: LayoutNames.portraitCentered,
    ratio: 420 / 594,
    radii: {
      outerCircle: 2 / 3,
      monthNames: 3 / 10,
      dateItems: 18 / 30,
      center: 5 / 30,
    },
  },
]);

export default layouts;
