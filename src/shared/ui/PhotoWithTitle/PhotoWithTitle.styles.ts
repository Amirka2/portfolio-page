import { rgba } from 'polished';
import { Link as BaseLink } from 'react-router-dom';
import styled from 'styled-components';

import { Color, mediaQueries } from '@shared';

export const Link = styled(BaseLink)`
  width: 100%;
  text-decoration: none;

  &:hover {
    filter: opacity(0.9);
  }
`;

export const Wrapper = styled.div<{
  img: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 224px;

  background: url(${({ img }) => img});
  background-size: cover;

  ${mediaQueries.gt.Desktop} {
    height: 400px;
  }
`;

export const Shadow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 92px;

  background: ${rgba(Color.Black, 0.5)};

  ${mediaQueries.gt.Desktop} {
    height: 148px;
  }
`;

export const Text = styled.span`
  // TODO add font
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: ${Color.White};

  ${mediaQueries.gt.Desktop} {
    font-size: 36px;
  }
`;
