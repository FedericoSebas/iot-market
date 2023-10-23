// React Component for the carousel of images in the detail page
"use client"

import styles from './carousel.module.css';
import { useState } from 'react';

export default function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    setCurrentImageIndex(currentImageIndex === lastIndex ? 0 : currentImageIndex + 1);
  };

  const prevSlide = () => {
    const lastIndex = images.length - 1;
    setCurrentImageIndex(currentImageIndex === 0 ? lastIndex : currentImageIndex - 1);
  };
  if(images === null || images === undefined){
    return <p>Loading...</p>
  }

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide}>❮</button>
      <img src={images[currentImageIndex]} alt={currentImageIndex} />
      <button onClick={nextSlide}>❯</button>
    </div>
  );
};

