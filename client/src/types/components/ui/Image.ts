import { ImgHTMLAttributes } from "react";

export type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
};

export type ImageCompareSliderProps = {
  image: {
    darkVersion: ImageProps;
    normalVersion: ImageProps;
  };
};
