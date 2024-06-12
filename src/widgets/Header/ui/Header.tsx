import React from 'react';

import {NavMenu} from "@features/nav";

import * as SC from './Header.styles';

export const Header = () => {

  return (
    <SC.Container>
      <SC.Header>
        <SC.Wrapper>
          <SC.MainText>Катерина Дорохова</SC.MainText>
          <SC.Line />
          <NavMenu />
        </SC.Wrapper>
      </SC.Header>
    </SC.Container>
  );
};
