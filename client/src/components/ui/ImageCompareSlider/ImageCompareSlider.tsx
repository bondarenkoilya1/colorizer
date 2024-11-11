import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { FC } from "react";
import { ImageCompareSliderProps } from "../../../types";

export const ImageCompareSlider: FC<ImageCompareSliderProps> = ({ image }) => {
  return (
    <ReactCompareSlider
      style={{ borderRadius: "12px", border: "3px solid #fff" }}
      itemOne={<ReactCompareSliderImage src={image.darkVersion.src} alt={image.darkVersion.alt} />}
      itemTwo={
        <ReactCompareSliderImage src={image.normalVersion.src} alt={image.normalVersion.alt} />
      }
    />
  );
};
