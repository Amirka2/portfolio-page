import React, { useState } from "react";

import { getPhotoPath } from "@shared/libs";
import { useTranslation } from "@shared/hooks";
import { PhotoWatcher } from "@entities/PhotoWatch";
import type { Work } from "@entities/Work";

import { usePhotoColumns } from "../hooks";
import * as SC from "./Gallery.styles";

interface GalleryProps {
  category: string;
  minWidth?: number;
  maxWidth?: number;
  works?: Work[];
}

export const Gallery = ({
  category,
  works,
  minWidth = 375,
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
        {sortedPhotos?.map((column) => (
          <SC.PhotosColumn maxWidth={maxWidth}>
            {column.map((work) => (
              <SC.Image
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
