import React, { useEffect } from "react";

import { Loader } from "@shared/ui";
import { setResources } from "@shared/libs";
import { prepareWorksDescriptions } from "@entities/Jobs";
import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useSceneries } from "../api";

const CATEGORY_KEY = "JobsScenery";

export const Scenery = () => {
  const { data, isPending, isError } = useSceneries();

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
    return <>error</>;
  }

  return (
    <GS.Wrapper>
      <Gallery works={data} category={CATEGORY_KEY} />
    </GS.Wrapper>
  );
};
