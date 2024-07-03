import styled from "styled-components";
import { Link as ReactLink} from 'react-router-dom';
import {rgba} from "polished";

import {Color} from "@shared";

export const Container = styled.nav`
    display: flex;
    align-items: center;
`;

export const Link = styled(ReactLink)`
    padding: 28px 52px;
    
    text-decoration: none;
    
    color: ${Color.Black};
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;


    &:hover {
        background: ${rgba(Color.Black, .1)};
    }
`;
