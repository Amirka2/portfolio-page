import React from "react";

import study from "@static/images/studywork.jpeg";

import { Gallery } from "@widgets/Gallery";

import { generateArray } from "../libs";
import * as SC from "./Study.styles";

const originArray = [
  study,
];

const photos = generateArray(originArray, 100);

export const Study = () => {
  return (
    <SC.Wrapper>
      <Gallery photos={photos} />
    </SC.Wrapper>
  );
};
