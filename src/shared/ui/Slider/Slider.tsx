import React, { PropsWithChildren } from "react";
import SlickSlider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as SC from './Slider.styles';

const BASE_SETTINGS: Settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  infinite: true,
};

interface SliderProps extends PropsWithChildren {}

export const BaseSlider = ({ children }: SliderProps) => {
  return (
    <SlickSlider {...BASE_SETTINGS}>
        {children}
    </SlickSlider>
  )
};

export const Slider = Object.assign(BaseSlider, {
    ImageWrapper: SC.PhotoContainer
})