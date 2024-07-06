import React, { ReactNode } from "react";
import SlickSlider, { Settings } from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import * as SC from "./Slider.styles";

const BASE_SETTINGS: Settings = {
  dots: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  infinite: true,
};

interface SliderProps extends Settings {
  children: ReactNode;
  activeSlide?: number;
}

export const BaseSlider = ({
  activeSlide = 0,
  children,
  ...restProps
}: SliderProps) => {
  return (
    <SlickSlider
      {...BASE_SETTINGS}
      {...restProps}
      ref={(slider) => {
        slider?.slickGoTo(activeSlide);
      }}
    >
      {children}
    </SlickSlider>
  );
};

export const Slider = Object.assign(BaseSlider, {
  ImageWrapper: SC.PhotoContainer,
});
