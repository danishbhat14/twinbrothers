import React, { useState, useEffect } from 'react';
import sliderImage1 from './Slider2.jpg';
import sliderImage2 from './Slider3.jpg';
import sliderImage3 from './Slider4.jpg';
import cn from 'classnames';

const images = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
 
];

const Slider = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSetIndex((currentSetIndex) => (currentSetIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const renderCarouselItems = () => {
    const items = [];

    const startIndex = currentSetIndex % images.length;
    const endIndex = (currentSetIndex + 3) % images.length;

    if (startIndex <= endIndex) {
      for (let i = startIndex; i <= endIndex; i++) {
        items.push(
          <div
            key={i}
            className={cn('carousel-item', 'w-full', 'h-screen',  {
              'opacity-100': i === startIndex,
              'opacity-0': i !== startIndex,
            })}
          >
            <img src={images[i]} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        );
      }
    } else {
      for (let i = startIndex; i < images.length; i++) {
        items.push(
          <div
            key={i}
            className={cn('carousel-item', 'w-full', 'h-72', 'p-4', {
              'opacity-100': i === startIndex,
              'opacity-0': i !== startIndex,
            })}
          >
            <img src={images[i]} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        );
      }

      for (let i = 0; i <= endIndex; i++) {
        items.push(
          <div
            key={i}
            className={cn('carousel-item', 'w-full', 'h-72', 'p-4', {
              'opacity-100': i === startIndex,
              'opacity-0': i !== startIndex,
            })}
          >
            <img src={images[i]} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        );
      }
    }

    return items;
  };

  const renderCarousel = () => {
    return <div className="carousel flex bg-gray-200">{renderCarouselItems()}</div>;
  };

  return windowWidth >= 768 ? renderCarousel() : null;
};

export default Slider;