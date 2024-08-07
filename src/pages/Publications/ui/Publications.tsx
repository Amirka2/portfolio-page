import React, { useEffect, useState } from 'react';

import { useTranslation } from '@shared/hooks';
import { getPhotoPath, setResources } from '@shared/libs';
import { Container, Loader } from '@shared/ui';

import {
  preparePublicationsDescriptions,
  Publication
} from '@entities/Publication';

import { usePublications } from '../api';

import * as SC from './Publications.styles';

const PUBLICATIONS_KEY = 'Publications';

export const Publications = () => {
  const { data, isError, isPending } = usePublications();
  const { t } = useTranslation();
  const [_, setResourcesReady] = useState(false);

  useEffect(() => {
    if (data) {
      const preparedResources = preparePublicationsDescriptions(data);
      setResources(preparedResources, PUBLICATIONS_KEY);
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
        {data?.map((publication) => (
          <Publication
            photo={getPhotoPath(publication.name)}
            text={t(`${PUBLICATIONS_KEY}.${publication?.id}`)}
          />
        ))}
      </SC.Wrapper>
    </Container>
  );
};
