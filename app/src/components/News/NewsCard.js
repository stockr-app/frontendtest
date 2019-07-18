import React from "react";
import './NewsCard.css';

const NewsCard = props => {
  return (
      
    <div className="NewsCard">
      <a href={props.url} rel="noopener noreferrer" target="_blank"><p>{props.title}</p></a>
      <img id="newsImg" src={props.image} alt={props.title} />
      <p>{props.text}</p>
      <h4>{props.source}</h4>
      <p>{props.date}</p>
    </div>
    
  );
};

export default NewsCard;