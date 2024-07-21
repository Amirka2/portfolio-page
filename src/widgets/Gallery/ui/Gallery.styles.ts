import styled from 'styled-components';

export const PhotosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const PhotosColumn = styled.div<{
  maxWidth: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: ${({ maxWidth }) => `${maxWidth}px`};
`;

export const Image = styled.img`
  width: 100%;
`;
