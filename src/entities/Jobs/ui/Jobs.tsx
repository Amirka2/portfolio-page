import React from "react";

import img from "@static/images/image.jpeg";
import { Container, PhotoWithTitle, SubTitle } from "@shared/ui";

import * as SC from "./Jobs.styles";
import { Paths } from "@shared";

export const Jobs = () => {
  return (
    <Container>
      <SC.Wrapper>
        <SubTitle>Мои работы</SubTitle>
        <SC.Column>
          <SC.Row>
            <PhotoWithTitle to={Paths.JobsPeysage} img={img}>
              Пейзажи
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsNaturmort} img={img}>
              Натюрморт
            </PhotoWithTitle>
          </SC.Row>
          <SC.Row>
            <PhotoWithTitle to={Paths.JobsArt} img={img}>
              Творческие работы
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsStudy} img={img}>
              Учебные работы
            </PhotoWithTitle>
            <PhotoWithTitle to={Paths.JobsGraphics} img={img}>
              Графика
            </PhotoWithTitle>
          </SC.Row>
        </SC.Column>
      </SC.Wrapper>
    </Container>
  );
};
