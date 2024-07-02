import React from "react";

import * as SC from "./Event.styles";

interface PublicationProps {
  photo: string;
  text: string;
  year?: string;
}

export const Event = ({ photo, text, year }: PublicationProps) => {
  return (
    <SC.Wrapper>
      <SC.Image src={photo} />
      <SC.Info>
        <SC.Text>{text}</SC.Text>
        <SC.Text>
          <b>{year}</b>
        </SC.Text>
      </SC.Info>
    </SC.Wrapper>
  );
};
