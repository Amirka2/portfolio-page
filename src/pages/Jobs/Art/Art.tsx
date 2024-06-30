import React from "react";

import artwork from "@static/images/artwork.png";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as SC from "./Art.styles";

const originArray = [
  artwork,
];

const photos = generateArray(originArray, 100);

export const Art = () => {
  return (
    <SC.Wrapper>
      <Gallery photos={photos} />
    </SC.Wrapper>
  );
};
