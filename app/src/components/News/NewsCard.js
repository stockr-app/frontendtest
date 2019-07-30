import React from "react";
import './NewsCard.css';

const NewsCard = props => {
  return (
      
    <div className="NewsCard">
      <img id="newsImg" src={props.image} alt={props.title} />
      <a className="aCard" href={props.url} rel="noopener noreferrer" target="_blank"><p>{props.title}</p></a>
      <h4 className="pCard">{props.source} - {props.date}</h4>
    </div>
    
  );
};

export default NewsCard;

// {"source":{"id":null,"name":"Socketsite.com"},
// "author":null,
// "title":"Indexed Returns for Bay Area Homes Nearing Negative Territory - SocketSite",
// "description":"Having ticked up 1.6 percent in April, the S&amp;P CoreLogic Case-Shiller Index for single-family home values within the San Francisco Metropolitan Area &#8211; which includes the East Bay, North Bay and Peninsula – inched up 0.3 percent in May. And with the …",
// "url":"https://socketsite.com/archives/2019/07/index-for-bay-area-home-values-nearing-negative-territory.html",
// "urlToImage":"https://socketsite.com/wp-content/uploads/2019/07/SP-Case-Shiller-Index-Returns-05-19.png",
// "publishedAt":"2019-07-30T18:11:15Z",
// "content":"Having ticked up 1.6 percent in April, the S&amp;P CoreLogic Case-Shiller Index for single-family home values within the San Francisco Metropolitan Area – which includes the East Bay, North Bay and Peninsula inched up 0.3 percent in May.\r\nAnd with the index n… [+1998 chars]"}