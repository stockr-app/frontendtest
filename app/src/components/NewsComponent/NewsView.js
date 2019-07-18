import React, { Component } from "react";
import NewsCard from "./NewsCard.js"
import axios from "axios";


class Newsview extends Component {
  constructor() {
    super ();
    this.state = {
        articles: [],
        search: ''
    }
}

updateSearch = (e) => {
  this.setState({search: e.target.value.toLowerCase()})
}

  componentDidMount() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1cf2cd707d2d4071a43410b68c7aaa3b`
      )
      .then(res => {
        console.log(res.data)
        this.setState({articles: res.data.articles});
      });
    
  }


  render() {
  
    let filteredArticles = this.state.articles.filter(
      (p) => {
        return p.title.toLowerCase().indexOf(this.state.search) !== -1;
      }
    )

    return (
      <div>

        <div className = 'search'>
          <input type = 'text'
          name = 'search'
          value = {this.state.search}
          onChange={this.updateSearch}
          />
        </div>

        
        {filteredArticles.map(article => {
          return (
            <NewsCard
          key={article.url}
          title={article.title}
          image = {article.urlToImage}
          text={article.text}
          url = {article.url}
          source={article.source_name}
          date={article.date}
          
        />
          );
        })}
      
      </div>
    );
  }
}

export default Newsview;