import React, {useState, useEffect, useCallback} from 'react';
import Image from '../../assets/iron.jpg'
import "./Slider.sass"

export default function Slider() {
  const [touchPosition, setTouchPosition] = useState(null)
  const [slide, setSlide] = useState(0);

  const windowWidth = window.innerWidth;


  const changeSlide = useCallback((direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = 7 - 1;
    } else {
      slideNumber = (slide + direction) % 7;
    }

    setSlide(slideNumber);
  });

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
    console.log('нажал');
    
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 7) {
      changeSlide(1);
    }

    if (direction < -7) {
      changeSlide(-1);
    }
    console.log('отпустил');

    setTouchPosition(null);
  }

  useEffect(() => {
    if (windowWidth >= 768) {

      const interval = setInterval(() => {
        changeSlide(1);
      }, 1500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [changeSlide, windowWidth], slide);

  return (
    <div className="slider"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}>
      <h2 className="slider__title">#GOOD4ME</h2>
      <div 
      className="slider__container"
      style={{transform: `translateX(-${slide*21.5}%)`}}>
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
        <img src={Image} alt="" className="slider__img" />
      </div>
    </div>
  );
}
