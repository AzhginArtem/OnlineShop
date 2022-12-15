import React from 'react';
import Post from './Post/Post';
import Image from '../../assets/iron.jpg';
import "./News.sass"

export default function News(props) {
  return (
    <div className="news">
      <h2 className="news__title">latest news</h2>
      <div className="news__container">
        <Post src={Image} alt="image" date="August 26, 2020" title="WE DONATE ONE WEEKS SUPPLY" subtitle="We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve...."/>
        <Post src={Image} alt="image" date="August 26, 2020" title="WE DONATE ONE WEEKS SUPPLY" subtitle="We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve...."/>
        <Post src={Image} alt="image" date="August 26, 2020" title="WE DONATE ONE WEEKS SUPPLY" subtitle="We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve...."/>
      </div>
    </div>
  )
}