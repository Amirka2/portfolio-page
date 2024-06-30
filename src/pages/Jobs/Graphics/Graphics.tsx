import React from "react";

import graphics from "@static/images/graphics.jpeg";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as GS from "../ui";
import * as SC from "./Graphics.styles";

const originArray = [
  graphics
];

const photos = generateArray(originArray, 100);

export const Graphics = () => {
  return (
    <GS.Wrapper>
      <Gallery photos={photos} />
    </GS.Wrapper>
  );
};
