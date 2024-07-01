import React from "react";

import { Gallery } from "@widgets/Gallery";

import * as GS from "../../ui";
import { generateArray } from "../../libs";

import { useSceneries } from "../api";
import * as SC from "./Scenery.styles";

// TODO заменить на ответ апи
const originArray = ['image-06-06-24-11-38-3.jpeg'];

const photos = generateArray(originArray, 1);

export const Scenery = () => {
  // const { data, isPending, isError } = useSceneries();

  // if (isPending) {
  //   return <>loading</>
  // }

  // if (isError) {
  //   return <>error</>
  // }

  return (
    <GS.Wrapper>
      <Gallery photos={photos} />
    </GS.Wrapper>
  );
};
