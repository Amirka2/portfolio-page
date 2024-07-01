import React, { useState } from "react";

import { PhotoWatcher } from "@entities/PhotoWatch";
import { usePhotoColumns } from "@shared/hooks";
import { getPhotoPath } from "@shared/libs";

import * as SC from "./Gallery.styles";

interface GalleryProps {
  minWidth?: number;
  maxWidth?: number;
  photos?: Array<string>;
}

export const Gallery = ({
  photos,
  minWidth = 375,
  maxWidth = 500,
}: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [sortedPhotos] = usePhotoColumns({
    photos,
    minWidth,
  });

  const handleClick = (photo: any) => {
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
        {sortedPhotos?.map((column: any) => (
          <SC.PhotosColumn maxWidth={maxWidth}>
            {column.map((photo: string) => (
              <SC.Image
                onClick={() => handleClick(photo)}
                alt="img1"
                src={getPhotoPath(photo)}
                title="Название длинное и сложное. Very very long description"
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
