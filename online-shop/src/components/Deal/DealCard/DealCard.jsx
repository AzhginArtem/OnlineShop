import React from 'react';

function DealCard(props) {
  return (
    <div className="deal__card">
      <div className="deal__card-back">
        {props.onSale ? <div className='deal__card-sail'>
          ON SALE
        </div> : ''}
        <img src={props.src} alt={props.alt} className="deal__card-image" />
      </div>
      <p className="deal__card-title">{props.title}</p>
      <div className="deal__card-prices">
        <p className="deal__card-actual">{props.actual}</p>
        <p className="deal__card-sale">{props.sale}</p>
      </div>
    </div>
  )
}

export default DealCard;