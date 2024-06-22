import React, { PropsWithChildren } from "react";

import * as SC from "./PhotoWithTitle.styles";

interface PhotoWithTitleProps extends PropsWithChildren {
  img: string;
  to: string;
}

export const PhotoWithTitle = ({ children, img, to }: PhotoWithTitleProps) => {
  return (
    <SC.Link to={to}>
      <SC.Wrapper img={img}>
        <SC.Shadow>
          <SC.Text>{children}</SC.Text>
        </SC.Shadow>
      </SC.Wrapper>
    </SC.Link>
  );
};
