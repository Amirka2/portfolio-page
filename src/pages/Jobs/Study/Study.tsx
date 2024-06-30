import React from "react";

import study from "@static/images/studywork.jpeg";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as GS from "../ui";
import * as SC from "./Study.styles";

const originArray = [
  study,
];

const photos = generateArray(originArray, 100);

export const Study = () => {
  return (
    <GS.Wrapper>
      <Gallery photos={photos} />
    </GS.Wrapper>
  );
};
