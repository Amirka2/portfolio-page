import React, { useEffect, useState } from 'react';

import { useTranslation } from '@shared/hooks';
import { getPhotoPath, setResources } from '@shared/libs';
import { Container, Loader } from '@shared/ui';

import { Event, prepareEventsDescriptions } from '@entities/Event';

import { useEvents } from '../api';

import * as SC from './Events.styles';

const EVENTS_KEY = 'Events';

export const Events = () => {
  const { data, isError, isPending } = useEvents();
  const { t } = useTranslation();
  const [_, setResourcesReady] = useState(false);

  useEffect(() => {
    if (data) {
      const preparedResources = prepareEventsDescriptions(data);
      setResources(preparedResources, EVENTS_KEY);
      setResourcesReady(true);
    }
  }, [data]);

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return (
      <>
        error
      </>
    );
  }

  return (
    <Container>
      <SC.Wrapper>
        {data.map((event) => (
          <Event
            photo={getPhotoPath(event.name)}
            text={t(`${EVENTS_KEY}.${event?.id}`)}
          />
        ))}
      </SC.Wrapper>
    </Container>
  );
};
