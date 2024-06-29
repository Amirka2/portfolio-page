import React from "react";

import { Slider } from "@shared/ui";

import * as SC from "./SecondarySlider.styles";

interface PhotoSliderProps {
  photos: Array<string>;
}

export const SecondarySlider = ({ photos }: PhotoSliderProps) => {
  return (
    <SC.Wrapper>
      <Slider >
        {photos.map((url) => (
          <Slider.ImageWrapper photo={url} key={url}>
            <img src={url} alt="photo" />
          </Slider.ImageWrapper>
        ))}
      </Slider>
    </SC.Wrapper>
  );
};
