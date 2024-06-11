import React from 'react';

import {NavMenu} from "@features/nav";

import * as SC from './Header.styles';

export const Header = () => {

  return (
    <SC.Container>
      <SC.Header>
        <NavMenu />
      </SC.Header>
    </SC.Container>
  );
};
