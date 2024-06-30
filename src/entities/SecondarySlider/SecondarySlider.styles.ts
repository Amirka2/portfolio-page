import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    
    background-size: cover;

    & .slick-slider {
        position: relative;
    }

    & .slick-slider img {
        height: 90vh;
    }

    & .slick-slider > .slick-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        width: 80px;
        height: 80px;

        z-index: 1000;
    }

    & .slick-slider > .slick-prev {
        left: 20px;
    }

    & .slick-slider > .slick-next {
        right: 20px;
    }

    & .slick-slider > .slick-dots {
        bottom: 10px;
    }
`;