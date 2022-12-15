/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import First from '../../assets/galleryFirst.jpg';
import Second from '../../assets/gallerySecond.jpg';
import Third from '../../assets/galleryThird.jpg';
import './Gallery.sass';

export default function Gallery (props) {
  return (
    <div className="gallery">
      <div className="gallery__container">
        <h2 className="gallery__title">TAKE CONTROL OF YOUR HEALTH</h2>
        <p className="gallery__subtitle">The Good4Me range has been formulated based on scientific & traditional evidence.</p>
        <p className="gallery__subtitle">Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
        <p className="gallery__subtitle">Made in New Zealand from local and imported ingredients.</p>
        <button className="gallery__btn">BROWSE OUR RANGE</button>
      </div>
      <div className="gallery__block">
          <div className="gallery__block-left">
            <img src={First} alt="Photo" className="gallery__img_left" />
            <img src={Second} alt="Photo" className="gallery__img_left" />
          </div>
          <img src={Third} alt="Photo" className="gallery__img" />
        </div>
    </div>
  )
}