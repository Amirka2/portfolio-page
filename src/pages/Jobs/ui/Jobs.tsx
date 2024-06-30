import React from "react";
import styled from "styled-components";

import peysage from "@static/images/peysage.jpeg";
import naturmort from "@static/images/naturmort.jpeg";
import artwork from "@static/images/artwork.png";
import studywork from "@static/images/studywork.jpeg";
import graphics from "@static/images/graphics.jpeg";
import { Gallery } from "@widgets/Gallery";

import * as SC from "./Jobs.styles";

export const SliderWrapper = styled.div`
  height: 90vh;
`;

const generateArray = (array: any[], capacity: number) => {
  let i = 0;
  const res = [];

  while (i < capacity) {
    const rnd = Math.random();
    const index = Math.floor(rnd * array.length);

    res.push(array[index]);

    i++;
  }

  return res;
};

const originArray = [
  peysage,
  naturmort,
  artwork,
  studywork,
  graphics
];

const photos = generateArray(originArray, 100);

export const Jobs = () => {
  return (
    <SC.Wrapper>
      <Gallery photos={photos} />
    </SC.Wrapper>
  );
};
