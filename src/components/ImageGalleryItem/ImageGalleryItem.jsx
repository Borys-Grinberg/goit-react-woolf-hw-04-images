import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, setCurrentImage }) => {
  return (
    <li className={css['gallery-item']} onClick={() => setCurrentImage(image)}>
      <img
        className={css['gallery-item-img']}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};
