import React from "react";

import * as SC from "./Event.styles";
import { Text } from "@shared/ui";

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
        <Text>{text}</Text>
        <Text>
          <b>{year}</b>
        </Text>
      </SC.Info>
    </SC.Wrapper>
  );
};
