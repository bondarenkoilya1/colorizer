export type ImageProps = {
  src: string;
  alt: string;
};

export type ImageCompareSliderProps = {
  image: {
    darkVersion: ImageProps;
    normalVersion: ImageProps;
  };
};
