export interface Design {
  background: {
    active: boolean;
    image: {
      active: boolean;
    };
    overlay: {
      active: boolean;
      color: string;
      opacity: number;
      radialGradient: {
        active: boolean;
        centerColor: string;
        centerSize: number;
      };
      backdropBlur: number;
    };
  };
  title: string;
  layout: {
    label: string;
    value: number;
  };
  outerCircle: {
    active: boolean;
    ratio: number;
    border: {
      active: boolean;
      width: number;
      color: string;
      opacity: number;
    };
    color: string;
    opacity: number;
    backdropBlur: number;
  };
  monthNames: {
    active: boolean;
    ratio: number;
    fontSize: number;
    fontFamily: { name: string; link: string };

    opacity: number;
    color: string;
  };
  dateItems: {
    active: boolean;
    ratio: number;
    bgColor: {
      active: boolean;
      color: string;
      opacity: number;
      backdropBlur: number;
    };
    avatar: boolean;
    avatarSize: number;
    avatarBorder: {
      active: boolean;
      color: string;
      width: number;
      radius: number;
      opacity: number;
    };
    itemBorder: {
      active: boolean;
      color: string;
      width: number;
      radius: number;
      opacity: number;
    };
    text: {
      fontFamily: { name: string; link: string };
      fontSize: number;
      color: string;
    };
  };
  center: {
    active: boolean;
    ratio: number;
    copy: string;
    text: {
      fontFamily: { name: string; link: string };
      fontSize: number;
      color: string;
      opacity: number;
    };

    background: {
      color: string;
      imageActive: boolean;
      opacity: number;
    };
    border: {
      active: boolean;
      color: string;
      width: number;
      opacity: number;
    };
  };
}

export function createDesign(): Design {
  return {
    background: {
      active: false,
      image: {
        active: false,
      },
      overlay: {
        active: false,
        color: "#FFF",
        opacity: 0,
        radialGradient: {
          active: false,
          centerColor: "#FFF",
          centerSize: 0,
        },
        backdropBlur: 0,
      },
    },
    title: "no design loaded",
    layout: {
      label: "landscape",
      value: 594 / 420,
    },
    outerCircle: {
      active: false,
      ratio: 0,
      border: {
        active: false,
        width: 0,
        color: "#FFF",
        opacity: 0,
      },
      color: "#FFF",
      opacity: 0,
      backdropBlur: 0,
    },
    monthNames: {
      active: false,
      ratio: 0,
      fontSize: 0,
      fontFamily: {
        name: "Lato",
        link: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
      },

      opacity: 0,
      color: "",
    },
    dateItems: {
      active: false,
      ratio: 0,
      bgColor: {
        active: false,
        color: "#FFF",
        opacity: 0,
        backdropBlur: 0,
      },
      avatar: false,
      avatarSize: 0,
      avatarBorder: {
        active: false,
        color: "#FFF",
        width: 0,
        radius: 0,
        opacity: 0,
      },
      itemBorder: {
        active: false,
        color: "#FFF",
        width: 0,
        radius: 0,
        opacity: 0,
      },
      text: {
        fontFamily: {
          name: "Lato",
          link: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
        },

        fontSize: 0,
        color: "#FFF",
      },
    },
    center: {
      active: false,
      ratio: 0,
      copy: "",
      text: {
        fontFamily: {
          name: "Lato",
          link: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
        },

        fontSize: 0,
        color: "#FFF",
        opacity: 0,
      },
      background: {
        color: "#FFF",
        imageActive: false,
        opacity: 0,
      },
      border: {
        active: false,
        color: "#FFF",
        width: 0,
        opacity: 0,
      },
    },
  };
}

export interface DateItem {
  date: Date;
  name: string;
  imageUrl: string;
}
