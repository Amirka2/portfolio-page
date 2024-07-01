import React from "react";

import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";

import { useGraphics } from "../api";
import * as SC from "./Graphics.styles";

export const Graphics = () => {
  const { data, isPending, isError } = useGraphics();

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
