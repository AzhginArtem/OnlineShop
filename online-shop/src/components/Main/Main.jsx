import React from 'react';
import './Main.sass';

function Main(props) {
  return (
    <div className="main">
      <div className="main__container">
        <span className="main__logo">Good4Me</span>
        <h2 className="main__title">Apple Cider Vinegar</h2>
        <p className="main__subtitle">Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </p>
        <button className='main__btn'>SHOP NOW</button>
      </div>
    </div>
  )
}

export default Main;