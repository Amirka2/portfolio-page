import { Color } from "@shared";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  background-size: cover;

  & .slick-slider img {
    height: calc(100vh - 100px);
    width: fit-content;
  }

  & .slick-slider > .slick-arrow {
    position: fixed;
    top: 50vh;

    width: 80px;
    height: 80px;

    transform: translateY(-50%);

    z-index: 1000;
  }

  & .slick-slider > .slick-prev {
    left: 20px;
  }

  & .slick-slider > .slick-next {
    right: 20px;
  }

  & .slick-slider > .slick-dots {
    bottom: 20px;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;

  min-height: 40px;
  width: 100%;
  
  padding-top: 12px;
  background: ${Color.Gray};

  text-align: center;
  color: ${Color.White};
`;
