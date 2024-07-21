import React, { useState } from 'react';

import { useTranslation } from '@shared/hooks';
import { getPhotoPath } from '@shared/libs';

import { PhotoWatcher } from '@entities/PhotoWatch';
import type { Work } from '@entities/Work';

import { usePhotoColumns } from '../hooks';

import * as SC from './Gallery.styles';

interface GalleryProps {
  category: string;
  minWidth?: number;
  maxWidth?: number;
  works?: Work[];
}

export const Gallery = ({
  category,
  works,
  minWidth = 320,
  maxWidth = 450,
}: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [sortedPhotos] = usePhotoColumns({
    photos: works,
    minWidth,
  });
  const { t } = useTranslation();

  const handleClick = (photo: number) => {
    setActive(photo);
    setIsOpen(true);
  };

  const handleClose = () => {
    setActive(null);
    setIsOpen(false);
  };

  return (
    <>
      <SC.PhotosWrapper>
        {sortedPhotos?.map((column, index) => (
          <SC.PhotosColumn maxWidth={maxWidth} key={index}>
            {column.map((work) => (
              <SC.Image
                key={work.id}
                onClick={() => {
                  const workIndex = works.findIndex((w) => w.id === work.id);
                  handleClick(workIndex);
                }}
                alt={t(`${category}.${work.id}`)}
                src={getPhotoPath(work.name)}
                title={t(`${category}.${work.id}`)}
              />
            ))}
          </SC.PhotosColumn>
        ))}
      </SC.PhotosWrapper>
      <PhotoWatcher
        category={category}
        isOpen={isOpen}
        onClose={handleClose}
        works={works}
        activeWork={active}
      />
    </>
  );
};
