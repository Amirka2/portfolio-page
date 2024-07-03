import React from "react";

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

  return (
    <SC.Wrapper>
      <MainSlider photos={data} />
      <BioMain />
      <Jobs />
    </SC.Wrapper>
  );
};
