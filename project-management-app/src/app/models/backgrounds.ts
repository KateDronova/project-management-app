export interface Background {
  id: string;
  src: string;
  srcFullScreen: string,
  alt: string;
  value: string;
}

export const backgrounds = [
  {
    id: "sky",
    src: "../../../assets/images/ICON_Clouds 2 (1920x1080).jpg",
    srcFullScreen: "../../../assets/images/Clouds 2 (1920x1080).jpg",
    alt: "sky",
    value: "sky"
  },
  {
    id: "ice",
    src: "../../../assets/images/ICON_Ice Lake (1920x1080).jpg",
    srcFullScreen: "../../../assets/images/Ice Lake (1920x1080).jpg",
    alt: "ice",
    value: "ice"
  },
  {
    id: "leaves",
    src: "../../../assets/images/ICON_Leaves (1920x1080).jpg",
    srcFullScreen: "../../../assets/images/Leaves (1920x1080).jpg",
    alt: "leaves",
    value: "leaves"
  },
  {
    id: "beach",
    src: "../../../assets/images/ICON_Small Sea Waves Beach (1920x1080).jpg",
    srcFullScreen: "../../../assets/images/Small Sea Waves Beach (1920x1080).jpg",
    alt: "beach",
    value: "beach"
  },
  {
    id: "sea",
    src: "../../../assets/images/ICON_Sea Waves (1920x1080).jpg",
    srcFullScreen: "../../../assets/images/Sea Waves (1920x1080).jpg",
    alt: "sea",
    value: "sea"
  }
]
