/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Star from '../../../assets/star.svg';

export default function Review(props) {
  const stars = Array.from({length: props.stars}, (_, index) => {
    return <img key={index} src={Star}/>;
  });
  for (let i = 0; i < 5 - props.stars; i++) {
    stars.push(<img key={i} src={Star} className="reviews__review-star"/>);
  }
  return (
    <div className="reviews__review">
      <h2 className="reviews__review-title">{props.title}</h2>
      <div className="reviews__review-stars">
        {stars}
      </div>
      <p className="reviews__review-subtitle">{props.subtitle}</p>
      <span className="reviews__review-author">{props.author}</span>
    </div>
  );
}
