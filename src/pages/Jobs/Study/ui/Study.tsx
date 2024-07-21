import React, { useEffect } from 'react';

import { setResources } from '@shared/libs';
import { Loader } from '@shared/ui';

import { prepareWorksDescriptions } from '@entities/Jobs';

import { Gallery } from '@widgets/Gallery';

import * as GS from '../../ui';
import { useStudyWorks } from '../api';

const CATEGORY_KEY = 'JobsStudy';

export const Study = () => {
  const { data, isPending, isError } = useStudyWorks();

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
