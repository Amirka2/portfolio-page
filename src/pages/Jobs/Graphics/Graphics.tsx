import React from "react";

import graphics from "@static/images/graphics.jpeg";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as SC from "./Graphics.styles";

const originArray = [
  graphics
];

const photos = generateArray(originArray, 100);

export const Graphics = () => {
  return (
    <SC.Wrapper>
      <Gallery photos={photos} />
    </SC.Wrapper>
  );
};
