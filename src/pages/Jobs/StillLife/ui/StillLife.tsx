import React from "react";

import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useStillLifes } from "../api";
import * as SC from "./StillLife.styles";

export const StillLife = () => {
  const { data, isPending, isError } = useStillLifes();

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
