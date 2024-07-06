import React, { ReactNode } from "react";
import SlickSlider, { Settings } from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import * as SC from "./Slider.styles";
import { useWindowSize } from "@shared/hooks";
import { Breakpoints } from "@shared/constants";

const BASE_SETTINGS: Settings = {
  dots: false,
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
  const [width] = useWindowSize();
  const arrows = {
    arrows: width > Breakpoints.Desktop
  };

  return (
    <SlickSlider
      {...BASE_SETTINGS}
      {...arrows}
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
