import React from 'react';

import {MainSlider} from "@entities/MainSlider";
import {Bio} from "@entities/bio";

import * as SC from './Home.styles';

export const Home = () => {
  return (
    <SC.Wrapper>
      <MainSlider />
      <Bio />
    </SC.Wrapper>
  );
};
