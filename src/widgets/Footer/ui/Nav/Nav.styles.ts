import { rgba } from 'polished';
import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

import { Color } from '@shared';

export const Header = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${Color.White};

  margin-bottom: 24px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;

  width: fit-content;
`;

export const Link = styled(ReactLink)`
  padding: 8px 0;

  text-decoration: none;

  color: ${Color.HakiWhite};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  &:hover {
    color: ${rgba(Color.White, 0.8)};
  }
`;
