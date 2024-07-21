import React from 'react';

import { Desktop } from './Desktop';
import * as SC from './Header.styles';
import { Mobile } from './Mobile';

export const Header = () => (
  <>
    <SC.MobileHeader>
      <Mobile />
    </SC.MobileHeader>
    <SC.DesktopHeader>
      <Desktop />
    </SC.DesktopHeader>
  </>
);
