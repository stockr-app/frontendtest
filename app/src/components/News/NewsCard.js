import React from "react";


const NewsCard = props => {
  return (
      
    <div>
      <h3>{props.title}</h3>
      <img src={props.image} alt={props.title} />
      <p>{props.text}</p>
      <a href={props.url}>View News</a>
      <h4>{props.source}</h4>
      <p>{props.date}</p>
    </div>
    
  );
};

export default NewsCard;