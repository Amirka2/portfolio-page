import React from "react";

import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useSceneries } from "../api";
import * as SC from "./Scenery.styles";

export const Scenery = () => {
  const { data, isPending, isError } = useSceneries();

  if (isPending) {
    return <>loading</>
  }

  if (isError) {
    return <>error</>
  }

  return (
    <GS.Wrapper>
      <Gallery photos={data} />
    </GS.Wrapper>
  );
};
