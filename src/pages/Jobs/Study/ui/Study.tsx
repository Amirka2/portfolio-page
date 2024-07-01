import React from "react";

import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useStudyWorks } from "../api";
import * as SC from "./Study.styles";

export const Study = () => {
  const { data, isPending, isError } = useStudyWorks();

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
