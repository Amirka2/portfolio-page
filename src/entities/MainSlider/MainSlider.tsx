import React from "react";

import { useTranslation } from "@shared/hooks";
import { getPhotoPath } from "@shared/libs";
import { Slider } from "@shared/ui";

import * as SC from "./MainSlider.styles";

interface PhotoSliderProps {
  photos: Array<string>;
}

export const MainSlider = ({ photos }: PhotoSliderProps) => {
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <Slider>
        <SC.MainSlide>
          <SC.MainImage />
          <SC.MainText>{t("Main.shortName")}</SC.MainText>
          <SC.SecondaryText>{t("Main.profession")}</SC.SecondaryText>
        </SC.MainSlide>
        {photos.map((photo) => (
          <Slider.ImageWrapper photo={getPhotoPath(photo)} key={photo}>
            <img src={getPhotoPath(photo)} alt={"photo"} />
          </Slider.ImageWrapper>
        ))}
      </Slider>
    </SC.Wrapper>
  );
};
