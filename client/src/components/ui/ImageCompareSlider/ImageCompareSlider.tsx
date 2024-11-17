import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { FC } from "react";
import { ImageCompareSliderProps } from "../../../types";
import { CompareSliderStyles } from "./styled";
import styled from "@emotion/styled";

const ReactCompareSliderStyled = styled(ReactCompareSlider)(CompareSliderStyles);

export const ImageCompareSlider: FC<ImageCompareSliderProps> = ({ image }) => {
  return (
    <ReactCompareSliderStyled
      itemOne={<ReactCompareSliderImage src={image.darkVersion.src} alt={image.darkVersion.alt} />}
      itemTwo={
        <ReactCompareSliderImage src={image.normalVersion.src} alt={image.normalVersion.alt} />
      }
    />
  );
};
