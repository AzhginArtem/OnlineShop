import React from 'react';
import Review from './Review/Review';
import Arrow from '../../assets/arrow.svg';
import ReviewImage from '../../assets/review.jpg';
import './Reviews.sass';


export default function Reviews(props) {
  return (
    <div className="reviews">
      <div className="reviews__content">
        <h4 className="reviews__title">REAL REVIEWS</h4>
        <Review
          title="REAL RESULTS"
          subtitle="“We have perfected our formulas over time, based on your feedback. 
          Check out hundreds of reviews on our website.We can't wait until you are a part 
          of our Good4Me Family.”"
          author="_Chloe H."
          stars={4}
        />
        <div className="reviews__btns">
          <button className="reviews__btn">
            <img src={Arrow} alt="" className="reviews__arrow" />
          </button>
          <button className="reviews__btn">
            <img src={Arrow} alt="" className="reviews__arrow" />
          </button>
        </div>
      </div>
      <img src={ReviewImage} alt="" className="reviews__img" />
    </div>
  );
}
