import styled from "styled-components";

import {Color} from "@shared";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    
    display: flex;
    justify-content: center;
    
    width: 100%;
    
    background: rgba(255, 255, 255, .7);
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    
    width: fit-content;
`;

export const Container = styled.header`
    max-width: 1440px;
    margin: 0 auto;
`;

export const MainText = styled.h1`
    padding: 26px;
    
    font-family: Roboto, sans-serif;
    font-size: 48px;
    line-height: 56px;
    font-weight: 400;
    
    text-transform: uppercase;
`;

export const Line = styled.div`
    height: 1px;
    width: 100%;
    
    background-color: ${Color.Black};
`;
