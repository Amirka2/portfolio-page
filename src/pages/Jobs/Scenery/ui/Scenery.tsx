import React, { useEffect } from "react";

import { prepareWorksDescriptions, setResources } from "@entities/Jobs";
import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useSceneries } from "../api";
import * as SC from "./Scenery.styles";

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
    return <>loading</>;
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
