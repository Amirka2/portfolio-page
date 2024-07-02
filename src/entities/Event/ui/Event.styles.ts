import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const Image = styled.img`
  width: 412px;
  height: 530px;

  background-size: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 5;
`;

export const Text = styled.p`
  font-size: 24px;
  line-height: 28px;
`;
