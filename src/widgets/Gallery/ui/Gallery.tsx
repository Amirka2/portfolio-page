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
  photos?: Array<Work>;
}

export const Gallery = ({
  category,
  photos,
  minWidth = 375,
  maxWidth = 500,
}: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<Work | null>(null);
  const [sortedPhotos] = usePhotoColumns({
    photos,
    minWidth,
  });
  const { t } = useTranslation();

  const handleClick = (photo: Work) => {
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
                onClick={() => handleClick(work)}
                alt={t(`${category}.${work.id}`)}
                src={getPhotoPath(work.name)}
                title={t(`${category}.${work.id}`)}
              />
            ))}
          </SC.PhotosColumn>
        ))}
      </SC.PhotosWrapper>
      <PhotoWatcher
        isOpen={isOpen}
        onClose={handleClose}
        photos={photos}
        activePhoto={active}
      />
    </>
  );
};
