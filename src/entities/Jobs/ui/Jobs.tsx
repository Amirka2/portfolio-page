import art from '@static/images/artwork.jpeg';
import graphics from '@static/images/graphics.jpeg';
import scenery from '@static/images/scenery.jpeg';
import stillLife from '@static/images/stil_life.jpeg';
import study from '@static/images/studywork.jpeg';
import React from 'react';

import { Paths } from '@shared';
import { useTranslation } from '@shared/hooks';
import { Container, PhotoWithTitle, SubTitle } from '@shared/ui';

import * as SC from './Jobs.styles';

export const Jobs = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SC.Wrapper>
        <SubTitle>
          {t('Main.myJobsTitle')}
        </SubTitle>
        <SC.Column>
          <SC.Line>
            <PhotoWithTitle to={Paths.JobsScenery} img={scenery}>
              {t('Main.sceneries')}
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsStillLife} img={stillLife}>
              {t('Main.stillLifes')}
            </PhotoWithTitle>
          </SC.Line>
          <SC.Line>
            <PhotoWithTitle to={Paths.JobsArt} img={art}>
              {t('Main.artWorks')}
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsStudy} img={study}>
              {t('Main.studyWorks')}
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsGraphics} img={graphics}>
              {t('Main.graphics')}
            </PhotoWithTitle>
          </SC.Line>
        </SC.Column>
      </SC.Wrapper>
    </Container>
  );
};
