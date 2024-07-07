import React from "react";

import { useTranslation } from "@shared/hooks";
import { getPhotoPath } from "@shared/libs";
import { Slider } from "@shared/ui";

import * as SC from "./MainSlider.styles";
import { Work } from "@entities/Work";

interface PhotoSliderProps {
  works: Work[];
}

export const MainSlider = ({ works }: PhotoSliderProps) => {
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <Slider>
        <SC.MainSlide>
          <SC.MainImage />
          <SC.MainText>{t("Main.shortName")}</SC.MainText>
          <SC.SecondaryText>{t("Main.profession")}</SC.SecondaryText>
        </SC.MainSlide>
        {works.map((work) => (
          <SC.ImageWrapper photo={getPhotoPath(work.name)} key={work.name}>
            <SC.Image
              src={getPhotoPath(work.name)}
              alt={work.name}
              photoType={work.position}
            />
          </SC.ImageWrapper>
        ))}
      </Slider>
    </SC.Wrapper>
  );
};
