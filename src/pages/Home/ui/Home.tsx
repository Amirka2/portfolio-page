import React from 'react';

import { Loader } from '@shared/ui';

import { BioMain } from '@entities/Bio';
import { Jobs } from '@entities/Jobs';
import { MainSlider } from '@entities/MainSlider';

import { useMainSliderPhotos } from '../api';

import * as SC from './Home.styles';

export const Home = () => {
  const { data, isPending, isError } = useMainSliderPhotos();

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return (
      <>
        error
      </>
    );
  }

  return (
    <SC.Wrapper>
      <MainSlider works={data} />
      <BioMain />
      <Jobs />
    </SC.Wrapper>
  );
};
