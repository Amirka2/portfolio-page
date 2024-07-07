import styled from "styled-components";

import main from "@static/images/main_background.png";
import logo from "@static/images/main_logo.png";

import { mediaQueries } from "@shared";
import { PhotoRatioType } from "@shared/types";
import { Slider } from "@shared/ui";

export const Wrapper = styled.section`
  height: calc(100vh - 60px);
  width: 100%;

  background-size: cover;

  ${mediaQueries.gt.Desktop} {
    /* height: 100vh; */
  }

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

  ${({ photoType }) =>
    photoType === 'VERTICAL' &&
    `
    width: 75vw;
  `}
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
  
  background: url(${main});
  backdrop-filter: blur(10px);
  background-size: cover;

  ${mediaQueries.gt.Desktop} {
    height: 100vh;
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
  width: 106px;
  height: 100px;

  background: url(${logo});
  margin-bottom: 8px;
`;
