import React from "react";

import scenery from "@static/images/scenery.jpeg";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as GS from "../ui";
import * as SC from "./Scenery.styles";

const originArray = [scenery];

const photos = generateArray(originArray, 100);

export const Scenery = () => {
  return (
    <GS.Wrapper>
      <Gallery photos={photos} />
    </GS.Wrapper>
  );
};
