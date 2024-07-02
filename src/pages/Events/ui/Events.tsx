import React, { useEffect } from "react";

import { useTranslation } from "@shared/hooks";
import { getPhotoPath, setResources } from "@shared/libs";
import { Container } from "@shared/ui";
import { Event, prepareEventsDescriptions } from "@entities/Event";

import { useEvents } from "../api";

import * as SC from "./Events.styles";

export const Events = () => {
  const { data, isError, isPending } = useEvents();
  const { t } = useTranslation();

  useEffect(() => {
    if (data) {
      const preparedResources = prepareEventsDescriptions(data);
      setResources(preparedResources, "Publications");
    }
  }, [data]);

  if (isPending) {
    return <>loading</>;
  }

  if (isError) {
    return <>error</>;
  }

  return (
    <Container>
      <SC.Wrapper>
        {data.map((event) => (
          <Event
            photo={getPhotoPath(event.name)}
            text={t(`Publications.${event?.id}`)}
          />
        ))}
      </SC.Wrapper>
    </Container>
  );
};
