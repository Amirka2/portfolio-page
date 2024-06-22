import styled from "styled-components";

export const PhotoContainer = styled.div<{
    photo?: string;
}>`
    // нужно для центрирования фото в слайде
    display: flex !important;
    justify-content: center;

    background: url(${({ photo }) => photo});
    backdrop-filter: blur(10px);
`;