import React from "react";
import './NewsCard.css';

const NewsCard = props => {
  return (
      
    <div className="NewsCard">
      <a className="aCard" href={props.url} rel="noopener noreferrer" target="_blank"><p>{props.title}</p></a>
      <img id="newsImg" src={props.image} alt={props.title} />
      <p className="pCard">{props.text}</p>
      <h4 className="pCard">{props.source}</h4>
      <p className="pCard">{props.date}</p>
    </div>
    
  );
};

export default NewsCard;