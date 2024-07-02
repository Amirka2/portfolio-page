import React from "react";

import main from "@static/images/main_background.png";

import { MainSlider } from "@entities/MainSlider";
import { BioMain } from "@entities/Bio";
import { Jobs } from "@entities/Jobs";

import { useMainSliderPhotos } from "../api";
import * as SC from "./Home.styles";

export const Home = () => {
  const { data, isPending, isError } = useMainSliderPhotos();

  if (isPending) {
    return <>loading</>
  }

  if (isError) {
    return <>error</>
  }

  // TODO добавить фото на бэк, чтобы не менять структуру MainSlider
  // чтобы все пути брались с помощью хелпера 
  // 413 status
  data.unshift(main);

  return (
    <SC.Wrapper>
      <MainSlider photos={data} />
      <BioMain />
      <Jobs />
    </SC.Wrapper>
  );
};
