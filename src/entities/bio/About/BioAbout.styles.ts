import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 60px;

  padding: 100px 0;
`;

export const SideBlock = styled.div`
  display: flex;
  align-items: center;

  min-height: 800px;
  width: 50%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TextList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

export const TextListItem = styled.li`
  list-style-type: disc;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
