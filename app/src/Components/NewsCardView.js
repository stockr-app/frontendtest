import React, { Component } from "react";
import NewsCard from "./NewsCard.js";
import axios from "axios";

class NewsCardView extends Component {
  state = { data: []};

  componentDidMount() {
    axios
      .get(
        "https://stocknewsapi.com/api/v1/category?section=alltickers&items=50&token=hh2penxadvskyxa4mqrj5acth8kiwulfttn0eugq"
      )
      .then(res =>{ 
          
        this.setState(res.data)});
    console.log(this.state);
  }
  render() {
    return (
      <div>
        {this.state.data.map(p => {
          return (
            <NewsCard
              key={p.news_url}
              title={p.title}
              image = {p.image_url}
              text={p.text}
              url = {p.news_url}
              source={p.source_name}
              date={p.date}
            />
          );
        })}
      </div>
    );
  }
}

export default NewsCardView;
