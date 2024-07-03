import styled from "styled-components";

import main from "@static/images/main_background.png";
import logo from "@static/images/main_logo.png";

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
  font-size: 48px;
  font-weight: 400;
  line-height: 70px;
  text-align: center;
`;

export const SecondaryText = styled.h1`
  font-family: "Yuji Boku", serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 58px;
  text-align: center;
`;

export const MainImage = styled.div`
  width: 106px;
  height: 100px;

  background: url(${logo});
`;
