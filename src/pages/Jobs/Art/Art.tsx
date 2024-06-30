import React from "react";

import artwork from "@static/images/artwork.png";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as GS from "../ui";
import * as SC from "./Art.styles";

const originArray = [
  artwork,
];

const photos = generateArray(originArray, 100);

export const Art = () => {
  return (
    <GS.Wrapper>
      <Gallery photos={photos} />
    </GS.Wrapper>
  );
};
