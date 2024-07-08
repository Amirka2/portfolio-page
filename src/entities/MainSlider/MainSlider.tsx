import React from "react";

import main from "@static/images/main_background.jpeg";

import { useTranslation } from "@shared/hooks";
import { getPhotoPath } from "@shared/libs";
import { Slider } from "@shared/ui";
import { Work } from "@entities/Work";

import * as SC from "./MainSlider.styles";

interface PhotoSliderProps {
  works: Work[];
}

export const MainSlider = ({ works }: PhotoSliderProps) => {
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <Slider>
        <SC.MainSlide>
          <SC.SlideBackground src={main} />
            <SC.MainImage />
          <SC.MainText>{t("Main.shortName")}</SC.MainText>
          <SC.SecondaryText>{t("Main.profession")}</SC.SecondaryText>
        </SC.MainSlide>
        {works.map((work) => (
          <SC.ImageWrapper key={work.name}>
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
