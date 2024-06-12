import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

import { Color } from "../../constants";

export const Button = styled.button<{
  size: "S" | "M";
  fullWidth?: boolean;
}>`
  cursor: pointer;
  
  padding: 10px;
  
  color: ${Color.White};
  background-color: ${Color.Haki};
  
  border: none;

  ${({size}) => (size === "M") && css`
    font-size: 24px;

    padding: 20px 40px;
  `}
  
  ${({fullWidth}) => fullWidth ? css`
    width: 100%;
  ` : null
}
`;

export const LinkButton = styled(Link)<{
  size: "S" | "M"
}>`
  cursor: pointer;
  
  width: 80px;
  
  padding: 10px;
  font-size: 18px;
  
  color: ${Color.White};
  background-color: ${Color.Haki};
  
  border: none;
  border-radius: 8px;

  ${({size}) => (size === "M") && css`
    width: 130px;
    
    font-size: 26px;

    padding: 20px;

    border-radius: 16px;
  `}
`;
