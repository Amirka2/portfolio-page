import React from "react";

import img from "@static/images/image.jpeg";

import * as SC from "./Jobs.styles";
import { PhotoWithTitle, SubTitle } from "@shared";

export const Jobs = () => {
  return (
    <SC.Wrapepr>
      <SubTitle>Мои работы</SubTitle>
      <SC.Column>
        <SC.Row>
          <PhotoWithTitle to='/jobs/peysage' img={img}>Пейзажи</PhotoWithTitle>
          <PhotoWithTitle to='/jobs/naturmort' img={img}>Натюрморт</PhotoWithTitle>
        </SC.Row>
        <SC.Row>
          <PhotoWithTitle to='/jobs/art' img={img}>Творческие работы</PhotoWithTitle>
          <PhotoWithTitle to='/jobs/study' img={img}>Учебные работы</PhotoWithTitle>
          <PhotoWithTitle to='/jobs/graphics' img={img}>Графика</PhotoWithTitle>
        </SC.Row>
      </SC.Column>
    </SC.Wrapepr>
  );
};
