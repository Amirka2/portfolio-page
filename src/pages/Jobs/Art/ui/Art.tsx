import React, { useEffect } from "react";

import { prepareWorksDescriptions, setResources } from "@entities/Jobs";
import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useArtWorks } from "../api";
import * as SC from "./Art.styles";

const CATEGORY_KEY = "JobsArt";

export const Art = () => {
  const { data, isPending, isError } = useArtWorks();

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
