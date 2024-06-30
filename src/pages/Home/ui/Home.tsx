import React from "react";

import main from "@static/images/main_background.png";
import scenery from "@static/images/scenery.jpeg";
import stillLife from "@static/images/stil_life.jpeg";
import art from "@static/images/artwork.png";
import study from "@static/images/studywork.jpeg";
import graphics from "@static/images/graphics.jpeg";
import { MainSlider } from "@entities/MainSlider";
import { BioMain } from "@entities/Bio";
import { Jobs } from "@entities/Jobs";

import * as SC from "./Home.styles";

const photos = [
  main,
  scenery,
  stillLife,
  art,
  study,
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
