import React, { useEffect } from "react";

import { prepareWorksDescriptions, setResources } from "@entities/Jobs";
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
      <Gallery photos={data} category={CATEGORY_KEY} />
    </GS.Wrapper>
  );
};
