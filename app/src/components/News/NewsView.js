import React, { Component } from "react";
import NewsCard from "./NewsCard.js"
import axios from "axios";

class News extends Component {
  state = { articles: [] };

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1cf2cd707d2d4071a43410b68c7aaa3b`
      )
      .then(res => {
        this.setState(res.data);
      });
  }
  render() {
    return (
      <>
        {this.state.articles.map(p => {
          return (
            <NewsCard
          key={p.url}
          title={p.title}
          image = {p.urlToImage}
          text={p.text}
          url = {p.url}
          source={p.source_name}
          date={p.date}          
        />
          );
        })}
      </>
    );
  }
}

export default News;
