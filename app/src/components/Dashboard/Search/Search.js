import React, { Component } from "react";
import axios from "axios";
import StockCard from './StockCard';
import './Search.css';


class Search extends Component {
  constructor() {
    super ();
    this.state = {
        stocks: [],
        search: ''
    }
}

updateSearch = (e) => {
  this.setState({search: e.target.value.toUpperCase()})
}


componentDidMount() {
  // console.log(this.state.search)
    axios
      .get(
        `https://sandbox.iexapis.com/stable/stock/${this.state.search}/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`
      )
      .then(res => {
        console.log(res.data)
      });
  }


  render() {
    console.log(this.state)
    return (

        <div className = 'search'>
          
          <form className = 'searchbar'>

            <input type = 'text'
            name = 'search'
            value = {this.state.search}
            onChange = {this.updateSearch}
            />
            
            <input className = 'submit'
            type = 'submit'
            value = 'submit'
            
            />

          </form>
          {/* <div className = 'stockData'>
            {.map(stock => {
            return (
                <StockCard
            key = {stock.symbol}
            symbol = {stock.symbol}
            open = {stock.open}
            high = {stock.high}
            low = {stock.low}
            close ={stock.close}
            
            />
            );
            })}
          </div> */}
          
        </div>
    );
  }
}

export default Search;