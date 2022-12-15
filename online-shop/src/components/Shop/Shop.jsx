import React from 'react';
import DealCard from '../Deal/DealCard/DealCard';
import HairSkin from '../../assets/hair,skin&nails.png';
import Detox from '../../assets/detox+bloat.png';
import Probiotics from '../../assets/probiotics.jpg';
import AppleCider from '../../assets/applecider.png';
import './Shop.sass';

export default function Shop(props) {
  return (
    <div className="shop">
      <h2 className="shop__title">shop all</h2>
      <div className="shop__container">
        <DealCard
          onSale={true}
          src={HairSkin}
          title="**PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)"
          actual="$39.95 NZD"
          sale="$199.75 NZD"
        />
        <DealCard 
          onSale={true}
          src={Detox}
          title="DETOX + BLOAT SUPPORT VALUE PACK"
          actual="$39.95 NZD"
          sale="$199.75 NZD"/>
        <DealCard 
          onSale={true}
          src={Probiotics}
          title="PROBIOTICS: GUT HEALTH + BLOAT SUPPORT"
          actual="$39.95 NZD"
          sale="$199.75 NZD"/>
        <DealCard 
          onSale={true}
          src={AppleCider}
          title="APPLE CIDER VINEGAR"
          actual="$39.95 NZD"
          sale="$199.75 NZD"/>
      </div>
      <button className="shop__btn">VIEW ALL PRODUCTS</button>
    </div>
  );
}
