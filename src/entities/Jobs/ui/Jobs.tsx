import React from "react";

import peysage from "@static/images/peysage.jpeg";
import naturmort from "@static/images/naturmort.jpeg";
import artwork from "@static/images/artwork.png";
import studywork from "@static/images/studywork.jpeg";
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
            <PhotoWithTitle to={Paths.JobsPeysage} img={peysage}>
              Пейзажи
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsNaturmort} img={naturmort}>
              Натюрморт
            </PhotoWithTitle>
          </SC.Row>
          <SC.Row>
            <PhotoWithTitle to={Paths.JobsArt} img={artwork}>
              Творческие работы
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsStudy} img={studywork}>
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
