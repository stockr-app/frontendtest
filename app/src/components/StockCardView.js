import React, { Component } from "react";
import StockCard from "./StockCard";
import Title from './Title'

class StockCardView extends Component {
  state = { 
    meta: [],
    data: [],
    daily: []
  };

  componentDidMount() {

    const alpha = require('alphavantage')({ key: 'ZPD5IOU7QAZSLWEA' });
 
    alpha.data.daily(`GOOGL`).then(res => {


      this.setState({meta : [res['Meta Data']]})
      this.setState({data : [res['Time Series (Daily)']]})



      const datas = (this.state.data[0])

      this.setState({daily : [datas]})

      Object.entries(this.state.daily).map()
    });

  }


  render() {
    console.log(this.state.daily)
    return (
      <div>


          {this.state.meta.map(p =>{
            return(
              <Title 
                symbol = {p["2. Symbol"]}
              />
            )
          })}


           {Object.entries(this.state.daily).map(p => {
           return (
             <StockCard
               key = {p["2. high" * "5. volume"]}
               open = {p["1. open"]}
               high = {p["2. high"]}
               low = {p["3. low"]}
               close = {p["2. high"]}
             />
            )
            })}  



      </div>
    
    );
  }
}

export default StockCardView