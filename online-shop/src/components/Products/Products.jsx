import React from 'react';
import DealCard from '../Deal/DealCard/DealCard';
import Woman from "../../assets/woman.jpg";
import mVitamin from '../../assets/mVitamin.png';
import Vinegar from '../../assets/vinegar.jpg';
import VitaminC from '../../assets/vitaminC.png';
import './Products.sass';

export default function Products(props) {
  return (
    <div className="products">
      <h2 className="products__title">OUR PRODUCTS ARE</h2>
      <div className="products__container">
        <DealCard src={Woman} alt="Multi Vitamin" title='MULTI-VITAMIN (3 MONTH SUPPLY)' onSale={false} actual="$39.95 NZD" sale="$199.75 NZD"/>
        <DealCard src={VitaminC} alt="Multi Vitamin" title='MULTI-VITAMIN (3 MONTH SUPPLY)' onSale={true} actual="$39.95 NZD" sale="$199.75 NZD"/>
        <DealCard src={mVitamin} alt="Multi Vitamin" title='MULTI-VITAMIN (3 MONTH SUPPLY)' onSale={true} actual="$39.95 NZD" sale="$199.75 NZD"/>
        <DealCard src={Vinegar} alt="Multi Vitamin" title='MULTI-VITAMIN (3 MONTH SUPPLY)' onSale={true} actual="$94.95 NZD" sale="$199.75 NZD"/>
      </div>
      <button className="products__btn">VIEW ALL PRODUCTS</button>
    </div>
  )
}
