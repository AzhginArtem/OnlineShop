import React from "react";

export default function Post(props) {
  return (
    <div className="news__post">
      <img src={props.src} alt={props.alt} className="news__post-img" />
      <span className="news__post-date">{props.date}</span>
      <h3 className="news__post-title">{props.title}</h3>
      <p className="news__post-subtitle">{props.subtitle}</p>
      <button className="news__post-btn">READ MORE</button>
    </div>
  )
}