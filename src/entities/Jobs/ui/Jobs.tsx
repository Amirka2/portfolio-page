import React from "react";

import scenery from "@static/images/scenery.jpeg";
import stillLife from "@static/images/stil_life.jpeg";
import art from "@static/images/artwork.png";
import study from "@static/images/studywork.jpeg";
import graphics from "@static/images/graphics.jpeg";

import { Paths } from "@shared";
import { Container, PhotoWithTitle, SubTitle } from "@shared/ui";

import * as SC from "./Jobs.styles";

export const Jobs = () => {
  return (
    <Container>
      <SC.Wrapper>
        <SubTitle>Мои работы</SubTitle>
        <SC.Column>
          <SC.Row>
            <PhotoWithTitle to={Paths.JobsScenery} img={scenery}>
              Пейзажи
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsStillLife} img={stillLife}>
              Натюрморт
            </PhotoWithTitle>
          </SC.Row>
          <SC.Row>
            <PhotoWithTitle to={Paths.JobsArt} img={art}>
              Творческие работы
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsStudy} img={study}>
              Учебные работы
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsGraphics} img={graphics}>
              Графика
            </PhotoWithTitle>
          </SC.Row>
        </SC.Column>
      </SC.Wrapper>
    </Container>
  );
};
