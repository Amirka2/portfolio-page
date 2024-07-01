import React from "react";

import { Modal } from "@shared/ui";
import { SecondarySlider } from "@entities/SecondarySlider";

import * as SC from "./PhotoWatcher.styles";

interface PhotoWatcherProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Array<any>;
  activePhoto: any;
}

export const PhotoWatcher = ({
  isOpen,
  onClose,
  photos,
  activePhoto,
}: PhotoWatcherProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} withOverlay={false}>
      <SC.Wrapper>
        <SC.Placeholder></SC.Placeholder>
        <SecondarySlider photos={photos} />
      </SC.Wrapper>
    </Modal>
  );
};
