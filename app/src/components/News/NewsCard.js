import React from "react";
import './NewsCard.css';

const NewsCard = props => {
  return (
      
    <div className="NewsCard">
      <img id="newsImg" src={props.image} alt={props.title} />
      <a className="aCard" href={props.url} rel="noopener noreferrer" target="_blank">
        <p>{props.title}</p></a>
      {/* <p className="pCard">{props.text}</p> */}
      <h4 className="pCard">{props.source}  -  {props.date}</h4>
      {/* <p className="pCard">{props.date}</p> */}
    </div>
    
  );
};

export default NewsCard;

// [{"source":{"id":"cnn","name":"CNN"},
// "author":"Scottie Andrew and Brian Ries, CNN",
// "title":"Coca-Cola will sell an alcoholic drink nationwide in Japan after a successful test run - CNN",
// "description":"This October, Coca-Cola will expand its alcoholic soda throughout Japan. The company said it doesn't plan to sell an American counterpart.",
// "url":"https://www.cnn.com/2019/07/23/us/coke-alcohol-japan-trnd/index.html",
// "urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/190723093348-20190723-coca-cola-japan-super-tease.jpg",
// "publishedAt":"2019-07-23T17:26:00Z",
// "content":null}