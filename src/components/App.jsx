import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { getPixabayImages } from 'api/PixabayApi';
import { Modal } from './Modal/Modal';

import css from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getImages = async (query, page) => {
      try {
        setLoading(true);
        const data = await getPixabayImages(query, page);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setLoadMore(images.length < data.totalHits);
      } catch (error) {
        console.log(`Something went wrong... Cause: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    getImages(query, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  const onSearchSubmit = query => {
    setImages([]);
    setQuery(query);
    setPage(1);
    setLoadMore(false);
  };

  const onLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleCurrentImage = image => {
    setCurrentImage(image);
  };

  return (
    <div className={css.app}>
      <Searchbar onSearchSubmit={onSearchSubmit} />
      {images && (
        <ImageGallery images={images} toggleCurrentImage={toggleCurrentImage} />
      )}
      {loading && <Loader />}
      {loadMore && <Button page={page} setPage={setPage} />}

      {currentImage && (
        <Modal image={currentImage} toggleCurrentImage={toggleCurrentImage} />
      )}
    </div>
  );
};

export default App;
