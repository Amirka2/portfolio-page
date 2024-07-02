import React, { useEffect } from "react";

import { setResources } from "@shared/libs";
import { prepareWorksDescriptions } from "@entities/Jobs";
import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useGraphics } from "../api";
import * as SC from "./Graphics.styles";

const CATEGORY_KEY = "JobsGraphics";

export const Graphics = () => {
  const { data, isPending, isError } = useGraphics();

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
