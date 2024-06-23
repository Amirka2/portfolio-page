import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-self: center;
`;

export const Button = styled.button<{
  isActive: boolean;
}>`
  background: transparent;
  border: none;

  ${({ isActive }) =>
    isActive &&
    css`
      text-decoration: underline;
    `}

  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.13px;
  text-align: right;
`;
