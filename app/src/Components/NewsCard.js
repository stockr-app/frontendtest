import React from 'react';

const NewsCard = (props) => {
    return ( <div>
        <h3>{props.title}</h3>
        <img src ={props.image} alt = {props.title}/>
        <p>{props.text}</p>
        <a href = {props.url}>View News</a>
        <h4>{props.source}</h4>
        <p>{props.date}</p>
    </div> );
}
 
export default NewsCard;



// "title":"Google announces new game streaming service called Stadia",
// "news_url":"https://www.youtube.com/watch?v=RusqvPjL2Po",
// "image_url":"https://stocknewsapi.com/images/v1/g/o/googl-stadia.png",
// "text":"Google announced its new video game streaming service Stadia on Tuesday...",
// "sentiment":"Positive",
// "type":"Video",
// "source_name":"CNBC Television",
// "date":"Tue, 19 Mar 2019 16:36:22 -0400",
// "tickers":["GOOG", "GOOGL"]
// "tags":["product"]