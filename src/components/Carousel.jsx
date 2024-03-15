import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    console.log('images:', images);
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer); // cleanup on unmount
  }, [images]);

  return (
    <img className="carousel" src={`${images[currentImageIndex]}`} alt="carousel" />
  );
};

export default Carousel;