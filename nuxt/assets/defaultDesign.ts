import { type Design } from "~/assets/designTypes";
const designData: Design = {
  layout: {
    label: "landscape",
    value: 594 / 420,
  },
  background: {
    active: true,
    image: {
      active: true,
    },
    overlay: {
      active: true,
      opacity: 0.4,
      color: "#6b33",
      radialGradient: {
        active: true,
        centerColor: "#9c2121",
        centerSize: 60,
      },
      backdropBlur: 20,
    },
  },
  outerCircle: {
    active: true,
    ratio: 80,
    border: {
      active: true,
      width: 11,
      color: "#9c2121",
      opacity: 1,
    },
    color: "#FFF",
    opacity: 0.4,
    backdropBlur: 1,
  },
  monthNames: {
    active: true,
    ratio: 60,
    fontSize: 11,
    fontFamily: "Abel",
    opacity: 1,
    color: "white",
  },
  dateItems: {
    active: true,
    ratio: 40,
    bgColor: {
      active: true,
      color: "#FFF",
      opacity: 1,
      backdropBlur: 2,
    },

    avatar: false,
    avatarSize: 50,
    avatarBorder: {
      active: false,
      color: "white",
      width: 5,
      radius: 1000,
      opacity: 1,
    },
    itemBorder: {
      active: false,
      color: "#FFF",
      width: 2,
      radius: 1000,
      opacity: 1,
    },
    text: {
      fontFamily: "Ubuntu",
      fontSize: 11,
      color: "white",
    },
  },
  center: {
    active: true,
    ratio: 30,
    copy: "Our Family Birthdays",
    text: {
      fontFamily: "Tangerine",
      fontSize: 9,
      color: "#FFF",
      opacity: 0.8,
    },
    background: {
      color: "#9c2121",
      imageActive: null,
      opacity: 0.8,
    },
    border: {
      active: true,
      color: "#9f2121",
      width: 3,
      opacity: 0.8,
    },
  },
  title: "test 1",
};

export default designData;
