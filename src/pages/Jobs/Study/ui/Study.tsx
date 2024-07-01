import React, { useEffect } from "react";

import { prepareWorksDescriptions, setResources } from "@entities/Jobs";
import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useStudyWorks } from "../api";
import * as SC from "./Study.styles";

const CATEGORY_KEY = "JobsStudy";

export const Study = () => {
  const { data, isPending, isError } = useStudyWorks();

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
      <Gallery photos={data} category={CATEGORY_KEY} />
    </GS.Wrapper>
  );
};
