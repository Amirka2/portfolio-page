import styled from "styled-components";

export const PhotoContainer = styled.div<{
  photo?: string;
}>`
  position: relative;
  // нужно для центрирования фото в слайде
  display: flex !important;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  background: url(${({ photo }) => Boolean(photo) && photo});
  backdrop-filter: blur(10px);
`;