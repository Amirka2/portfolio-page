import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
`;

export const Button = styled.button<{
  isActive: boolean;
  color: string;
}>`
  background: transparent;
  border: none;

  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ color }) => color};

  ${({ isActive }) => isActive
    && `
      font-weight: 700;
    `}
`;
