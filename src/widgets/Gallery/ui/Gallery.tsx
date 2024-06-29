import React, { useState } from "react";

import { PhotoWatcher } from "@entities/PhotoWatch";

import { sortPhotos } from "../libs";
import * as SC from "./Gallery.styles";

interface GalleryProps {
  photos?: Array<string>;
}

export const Gallery = ({ photos }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<any>(null);

  const handleClick = (photo: any) => {
    setActive(photo);
    setIsOpen(true);
  };

  const handleClose = () => {
    setActive(null);
    setIsOpen(false);
  };

  const sortedPhotos = sortPhotos(photos);

  return (
    <div>
      <SC.PhotosWrapper>
        <SC.PhotosColumn>
          {sortedPhotos.first.map((photo) => (
            <SC.Image
              onClick={() => handleClick(photo)}
              alt="img1"
              src={photo}
              title='Название длинное и сложное. Very very long description'
            />
          ))}
        </SC.PhotosColumn>
        <SC.PhotosColumn>
          {sortedPhotos.second.map((photo) => (
            <SC.Image
              onClick={() => handleClick(photo)}
              alt="img1"
              src={photo}
              title='Название длинное и сложное. Very very long description'
            />
          ))}
        </SC.PhotosColumn>
        <SC.PhotosColumn>
          {sortedPhotos.third.map((photo) => (
            <SC.Image
              onClick={() => handleClick(photo)}
              alt="img1"
              src={photo}
              title='Название длинное и сложное. Very very long description'
            />
          ))}
        </SC.PhotosColumn>
      </SC.PhotosWrapper>
      <PhotoWatcher
        isOpen={isOpen}
        onClose={handleClose}
        photos={photos}
        activePhoto={active}
      />
    </div>
  );
};
