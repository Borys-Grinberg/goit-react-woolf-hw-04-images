import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, toggleCurrentImage }) => {
  const handleClick = () => {
    toggleCurrentImage(image);
  };

  return (
    <li className={css['gallery-item']} onClick={handleClick}>
      <img
        className={css['gallery-item-img']}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};
