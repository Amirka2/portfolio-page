import React from "react";

import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useArtWorks } from "../api";
import * as SC from "./Art.styles";

export const Art = () => {
  const { data, isPending, isError } = useArtWorks();

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
