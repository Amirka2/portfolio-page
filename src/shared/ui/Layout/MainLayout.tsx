import React from 'react';
import { Outlet } from 'react-router-dom';

import * as Styles from './styles';

export const MainLayout = () => (
  <Styles.Wrapper>
    <Styles.Container>
      <Outlet />
    </Styles.Container>
  </Styles.Wrapper>
);
