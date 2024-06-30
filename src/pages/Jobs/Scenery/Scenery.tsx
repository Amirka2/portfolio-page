import React from "react";

import scenery from "@static/images/scenery.jpeg";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as SC from "./Scenery.styles";

const originArray = [
  scenery,
];

const photos = generateArray(originArray, 100);

export const Scenery = () => {
  return (
    <SC.Wrapper>
      <Gallery photos={photos} />
    </SC.Wrapper>
  );
};
