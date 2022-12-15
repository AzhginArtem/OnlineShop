import React from 'react';
import DealCard from './DealCard/DealCard';
import mVitamin from '../../assets/mVitamin.png';
import FullRange from '../../assets/fullRange.jpg';
import VitaminC from '../../assets/vitaminC.png';
import Iron from '../../assets/iron.jpg';
import Plane from '../../assets/plane.png';
import Cash from '../../assets/money.png';
import Secure from '../../assets/secure.png';
import './Deal.sass';
import DealFeature from './DealFeature/DealFeature';

function Deal(props) {
  return (
    <div className="deal">
      <h2 className="deal__title">GOOD4ME DEAL</h2>
      <hr></hr>
      <p className="deal__subtitle">
        Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy
        products today!
      </p>
      <div className="deal__container">
        <DealCard src={mVitamin} alt="Vitamin" title="MULTI-VITAMIN: EVERYDAY WELLNESS" />
        <DealCard src={FullRange} alt="FullRange" title="FULL RANGE VALUE PACK (SAVE 33%)" />
        <DealCard src={VitaminC} alt="VitaminC" title="VITAMIN C: IMMUNITY SUPPORT " />
        <DealCard src={Iron} alt="Iron" title="IRON: ENERGY SUPPORT" />
      </div>
      <div className="deal__features">
        <DealFeature
          src={Plane}
          alt="Plane"
          title="WORLDWIDE SHIPPING"
          subtitle="Lorem ipsum dolor sit amet, consectetuer 
          adipiscing elit. Aenean"
        />
        <DealFeature
          src={Cash}
          alt="Money"
          title="30 DAYS GUARANTEE"
          subtitle="Lorem ipsum dolor sit amet, consectetuer 
          adipiscing elit. Aenean"
        />
        <DealFeature
          src={Secure}
          alt="Secure"
          title="SECURED PAYMENTS"
          subtitle="Lorem ipsum dolor sit amet, consectetuer 
                    adipiscing elit. Aenean"
        />
      </div>
    </div>
  );
}

export default Deal;
