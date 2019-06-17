import React, { Component } from "react";


class StockCardView extends Component {
  state = { 
    meta: [],
    data: [],
    daily: []
  };

  componentDidMount() {

    const alpha = require('alphavantage')({ key: 'ZPD5IOU7QAZSLWEA' });
 
    alpha.data.daily(`MSFT`).then(res => {


      this.setState({meta : [res['Meta Data']]})
      this.setState({data : [res['Time Series (Daily)']]})



      const datas = (this.state.data[0]['2019-04-15'])

      this.setState({daily : [datas]})
    });

  }


  render() {
    console.log(this.state.daily)
    return (
      <div>


          {this.state.meta.map(p =>{
            return(
      
                <h2>{p["2. Symbol"]}</h2>
            
            )
          })}


           {this.state.daily.map(p => {
           return (
             <div>
               <h4>key: {p["2. high" * "5. volume"]}</h4>
               <h4>open: {p["1. open"]}</h4>
               <h4>high: {p["2. high"]}</h4>
               <h4>low: {p["3. low"]}</h4>
               <h4>close: {p["2. high"]}</h4>
             </div>
            )
            })}  



      </div>
    
    );
  }
}

export default StockCardView