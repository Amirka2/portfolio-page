import React from 'react';

import {Button, Color, Container, Line, SubTitle, Text} from "@shared";
import img from '@static/images/main_background.png';

import * as SC from './Bio.styles';

export const Bio = () => {
  return (
    <Container>
      <SC.Wrapper>
        <SC.SideBlock>
          <SubTitle>
            Дорохова Екатерина Сергеевна
          </SubTitle>
          <SC.TextsList>
            <Text>
              Художник и преподаватель Российской Академии Художеств им. И.Е. Репина в г. Санкт-Петербурге с 2012 г.
            </Text>
            <Line />
            <Text>
              Член Союза Художников России с 2010 г.
              Член Союза Китайских художников и музыкантов в России .
            </Text>
            <Line />
            <Text>
              Дата рождения 27 ноября 1983 год в г. Сергиев Посад в семье художников.
            </Text>
            <Button size='M' color={Color.Haki}>
              Обо мне
            </Button>
          </SC.TextsList>
        </SC.SideBlock>
        <SC.SideBlock>
          <SC.Image src={img} alt='photo' title='АУЕ' />
        </SC.SideBlock>
      </SC.Wrapper>
    </Container>
  );
};
