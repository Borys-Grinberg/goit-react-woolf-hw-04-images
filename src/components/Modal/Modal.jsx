import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ image, toggleCurrentImage }) => {
  useEffect(() => {
    const onEscPress = evt => {
      if (evt.code === 'Escape') {
        toggleCurrentImage(null);
      }
    };

    document.addEventListener('keydown', onEscPress);

    return () => {
      document.removeEventListener('keydown', onEscPress);
    };
  }, [toggleCurrentImage]);

  const onClick = event => {
    if (event.target === event.currentTarget) {
      toggleCurrentImage(null);
    }
  };

  return (
    <div className={css.overlay} onClick={onClick}>
      <div className={css.modal}>
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
};
