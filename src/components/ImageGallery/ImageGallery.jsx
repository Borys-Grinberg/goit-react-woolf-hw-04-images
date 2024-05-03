import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, toggleCurrentImage }) => {
  return (
    <ul className={css.gallery}>
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            image={img}
            toggleCurrentImage={toggleCurrentImage}
          />
        );
      })}
    </ul>
  );
};
