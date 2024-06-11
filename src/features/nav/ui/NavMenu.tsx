import React from 'react';

import * as SC from './NavMenu.styles';

export const NavMenu = () => {
  return (
    <SC.Container>
      <SC.Link to='/'>
        Home
      </SC.Link>
    </SC.Container>
  );
};
