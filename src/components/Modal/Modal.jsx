import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ image, setCurrentImage }) => {
  useEffect(() => {
    const onEscPress = evt => {
      if (evt.code === 'Escape') {
        setCurrentImage(null);
      }
    };

    document.addEventListener('keydown', onEscPress);

    return () => {
      document.removeEventListener('keydown', onEscPress);
    };
  }, [setCurrentImage]);

  const onClick = evt => {
    if (evt.target === evt.currentTarget) {
      setCurrentImage(null);
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
