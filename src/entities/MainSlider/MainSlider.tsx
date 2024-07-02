import React from "react";

import { getPhotoPath } from "@shared/libs";
import { Slider } from "@shared/ui";

import * as SC from "./MainSlider.styles";

interface PhotoSliderProps {
  photos: Array<string>;
}

export const MainSlider = ({ photos }: PhotoSliderProps) => {
  return (
    <SC.Wrapper>
      <Slider>
        {photos.map((photo) => (
          <Slider.ImageWrapper photo={getPhotoPath(photo)} key={photo}>
            <img src={getPhotoPath(photo)} alt={"photo"} />
          </Slider.ImageWrapper>
        ))}
      </Slider>
    </SC.Wrapper>
  );
};
