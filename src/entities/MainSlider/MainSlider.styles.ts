import styled from "styled-components";

import main from "@static/images/main_background.png";
import logo from "@static/images/main_logo.png";
import { mediaQueries } from "@shared";

export const Wrapper = styled.section`
  height: 100vh;
  width: 100%;

  background-size: cover;

  & .slick-slider {
    position: relative;
  }

  & .slick-slider img {
    height: 100vh;
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

export const MainSlide = styled.div<{
  photo?: string;
}>`
  position: relative;

  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  background: url(${main});
  backdrop-filter: blur(10px);
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
