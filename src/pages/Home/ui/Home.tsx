import React from "react";

import main from "@static/images/main_background.png";
import peysage from "@static/images/peysage.jpeg";
import naturmort from "@static/images/naturmort.jpeg";
import artwork from "@static/images/artwork.png";
import studywork from "@static/images/studywork.jpeg";
import graphics from "@static/images/graphics.jpeg";
import { MainSlider } from "@entities/MainSlider";
import { BioMain } from "@entities/Bio";
import { Jobs } from "@entities/Jobs";

import * as SC from "./Home.styles";

const photos = [
  main,
  peysage,
  naturmort,
  artwork,
  studywork,
  graphics
];

export const Home = () => {
  return (
    <SC.Wrapper>
      <MainSlider photos={photos} />
      <BioMain />
      <Jobs />
    </SC.Wrapper>
  );
};
