import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, toggleCurrentImage }) => {
  return (
    <ul className={css.gallery}>
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={nanoid()}
            image={img}
            toggleCurrentImage={toggleCurrentImage}
          />
        );
      })}
    </ul>
  );
};
