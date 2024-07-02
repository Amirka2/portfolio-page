import React from "react";

import { useTranslation } from "@shared/hooks";
import { Modal } from "@shared/ui";
import { SecondarySlider } from "@entities/SecondarySlider";
import { mapWorksToPhotos, type Work } from "@entities/Work";

import * as SC from "./PhotoWatcher.styles";

interface PhotoWatcherProps {
  category: string;
  isOpen: boolean;
  onClose: () => void;
  works: Work[];
  activeWork: number;
}

export const PhotoWatcher = ({
  category,
  isOpen,
  onClose,
  works,
  activeWork,
}: PhotoWatcherProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} withOverlay={false}>
      <SC.Wrapper>
        <SC.Placeholder></SC.Placeholder>
        <SecondarySlider
          works={works}
          category={category}
          activeSlide={activeWork}
        />
      </SC.Wrapper>
    </Modal>
  );
};
