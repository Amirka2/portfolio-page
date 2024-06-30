import React from "react";

import stillLife from "@static/images/stil_life.jpeg";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as SC from "./StillLife.styles";

const originArray = [
  stillLife,
];

const photos = generateArray(originArray, 100);

export const StillLife = () => {
  return (
    <SC.Wrapper>
      <Gallery photos={photos} />
    </SC.Wrapper>
  );
};
