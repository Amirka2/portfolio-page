import React from 'react';

import { Modal } from '@shared/ui';

import { SecondarySlider } from '@entities/SecondarySlider';
import { type Work } from '@entities/Work';

import * as SC from './PhotoWatcher.styles';

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
}: PhotoWatcherProps) => (
  <Modal isOpen={isOpen} onClose={onClose} withOverlay={false}>
    <SC.Wrapper>
      <SC.Placeholder />
      <SecondarySlider
        works={works}
        category={category}
        activeSlide={activeWork}
      />
    </SC.Wrapper>
  </Modal>
);
