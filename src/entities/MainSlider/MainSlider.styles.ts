import styled from "styled-components";

import logo from "@static/images/main_logo.png";

import { Color, mediaQueries } from "@shared";
import { PhotoRatioType } from "@shared/types";
import { Slider } from "@shared/ui";

export const Wrapper = styled.section`
  height: calc(100vh - 60px);
  width: 100%;

  background-size: cover;

  & .slick-slider {
    position: relative;
  }

  & .slick-slider > .slick-arrow {
    display: none;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 80px;
    height: 80px;

    z-index: 1000;
  }

  & .slick-slider > .slick-prev {
    left: 20px;
  }

  & .slick-slider > .slick-next {
    right: 20px;
  }

  & .slick-slider > .slick-dots {
    bottom: 10px;
  }
`;

export const ImageWrapper = styled(Slider.ImageWrapper)`
  background: ${Color.Haki};

  ${mediaQueries.gt.Desktop} {
    height: 100vh;
  }
`;

export const Image = styled.img<{
  photoType?: PhotoRatioType;
}>`
  width: 100vw;

  ${mediaQueries.gt.Desktop} {
    width: auto;
    height: 100%;
    max-height: calc(100vh);
  }

  ${({ photoType }) => photoType === "VERTICAL" && `width: 75vw;`}
`;

export const MainSlide = styled.div<{
  photo?: string;
}>`
  position: relative;

  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 60px);

  ${mediaQueries.gt.Desktop} {
    height: 100vh;
  }
`;

export const SlideBackground = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;

  filter: blur(1px);
  height: 100%;
  width: 100%;

  z-index: -1;

  ${mediaQueries.gt.Tablet} {
    width: 100%;
  }

  ${mediaQueries.gt.Desktop} {
    bottom: -300px;

    height: auto;
    width: 100vw;

    aspect-ratio: 1;
  }
`;

export const MainText = styled.h1`
  font-family: "Yuji Boku", serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;

  ${mediaQueries.gt.Desktop} {
    font-size: 32px;
    line-height: 46px;
  }
`;

export const SecondaryText = styled.h2`
  font-family: "Yuji Boku", serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;

  ${mediaQueries.gt.Desktop} {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const MainImage = styled.div`
  width: 38px;
  height: 36px;

  background: url(${logo});
  background-size: cover;
  margin-bottom: 8px;

  ${mediaQueries.gt.Desktop} {
    width: 106px;
    height: 100px;
  }
`;
