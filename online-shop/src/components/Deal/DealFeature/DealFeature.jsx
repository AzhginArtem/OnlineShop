import React from 'react';

function DealFeature(props) {
  return (
    <div className="deal__feature">
      <img src={props.src} alt={props.alt} />
      <h3 className="deal__feature-title">{props.title}</h3>
      <p className="deal__feature-subtitle">{props.subtitle}</p>
    </div>
  )
}

export default DealFeature;