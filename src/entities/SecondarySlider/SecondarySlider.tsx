import React from "react";

import { useTranslation } from "@shared/hooks";
import { getPhotoPath } from "@shared/libs";
import { Slider } from "@shared/ui";
import type { Work } from "@entities/Work";

import * as SC from "./SecondarySlider.styles";

interface PhotoSliderProps {
  category: string;
  works: Work[];
  activeSlide: number;
}

export const SecondarySlider = ({
  category,
  works,
  activeSlide,
}: PhotoSliderProps) => {
  const { t } = useTranslation();

  return (
    <SC.Wrapper>
      <Slider dots={false} activeSlide={activeSlide}>
        {works.map((work) => (
          <Slider.ImageWrapper key={work.name}>
            <SC.Image
              src={getPhotoPath(work.name)}
              alt={t(`${category}.${work?.id}`)}
              isLimitedHeight={work.position === 'VERTICAL'}
            />
            <SC.Description>{t(`${category}.${work?.id}`)}</SC.Description>
          </Slider.ImageWrapper>
        ))}
      </Slider>
    </SC.Wrapper>
  );
};
