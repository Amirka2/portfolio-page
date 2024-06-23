import React from "react";

import { MainSlider } from "@entities/MainSlider";
import { BioMain } from "@entities/Bio";
import { Jobs } from "@entities/Jobs";

import main from "@static/images/main_background.png";

import * as SC from "./Home.styles";

const photos = [
  main,
  "https://img10.reactor.cc/pics/post/full/mignon-Anime-Artist-artist-hentai-art-8064623.jpeg",
  "https://img10.reactor.cc/pics/post/full/Anime-Kantoku-Tsutsukakushi-Tsukiko-HenNeko-3039075.jpeg",
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
