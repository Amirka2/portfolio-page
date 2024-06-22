import React from "react";

import { Slider } from "@shared/ui";

import * as SC from "./MainSlider.styles";

interface PhotoSliderProps {
  photos: Array<string>;
}

export const MainSlider = ({ photos }: PhotoSliderProps) => {
  return (
    <SC.Wrapper>
      <Slider>
        {photos.map((url) => (
          <Slider.ImageWrapper photo={url} key={url}>
            <img src={url} alt={"photo"} />
          </Slider.ImageWrapper>
        ))}
      </Slider>
    </SC.Wrapper>
  );
};
