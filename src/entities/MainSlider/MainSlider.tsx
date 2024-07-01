import React from "react";

import { Slider } from "@shared/ui";

import * as SC from "./MainSlider.styles";
import { getPhotoPath } from "@shared/libs";

interface PhotoSliderProps {
  photos: Array<string>;
}

export const MainSlider = ({ photos }: PhotoSliderProps) => {
  return (
    <SC.Wrapper>
      <Slider>
        {photos.map((url) => (
          <Slider.ImageWrapper photo={getPhotoPath(url)} key={url}>
            <img src={getPhotoPath(url)} alt={"photo"} />
          </Slider.ImageWrapper>
        ))}
      </Slider>
    </SC.Wrapper>
  );
};
