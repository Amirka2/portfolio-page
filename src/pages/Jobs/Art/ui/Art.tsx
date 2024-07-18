import React, { useEffect } from 'react';

import { setResources } from '@shared/libs';
import { Loader } from '@shared/ui';

import { prepareWorksDescriptions } from '@entities/Jobs';

import { Gallery } from '@widgets/Gallery';

import * as GS from '../../ui';
import { useArtWorks } from '../api';

const CATEGORY_KEY = 'JobsArt';

export const Art = () => {
  const { data, isPending, isError } = useArtWorks();

  useEffect(() => {
    if (data) {
      const preparedResources = prepareWorksDescriptions(data);
      setResources(preparedResources, CATEGORY_KEY);
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
    <GS.Wrapper>
      <Gallery works={data} category={CATEGORY_KEY} />
    </GS.Wrapper>
  );
};
