import React from 'react';

import { Text } from '@shared/ui';

import * as SC from './Event.styles';

interface PublicationProps {
  photo: string;
  text: string;
  year?: string;
}

export const Event = ({ photo, text, year }: PublicationProps) => (
  <SC.Wrapper>
    <SC.Image src={photo} />
    <SC.Info>
      <Text>
        {text}
      </Text>
      <Text>
        <b>
          {year}
        </b>
      </Text>
    </SC.Info>
  </SC.Wrapper>
);
