import React, { Component } from 'react';
import axios from 'axios';

export default class FB extends Component {

  state = {
    stock: [],
  }
  
  componentDidMount() {
    axios.get('https://sandbox.iexapis.com/stable/stock/FB/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b').then((response) => {
      this.setState({stock: response.data})
    });
  }



  render() {
      return (
        <div className="stock">
          <h3>{this.state.stock.symbol}</h3>
          <p id="stockName">{this.state.stock.companyName}</p>
          <div className="stockInfo">
            <div className="stockActivity">
              <div className="dailyActivity">
                <p>O: {this.state.stock.open}</p>
                <p>C: {this.state.stock.close}</p>
              </div>
                <div>
                  <div className="activity">
                    <i className="fas fa-caret-up"></i><p id="high">{this.state.stock.high}</p>
                  </div>
                  <div className="activity">
                    <i className="fas fa-caret-down"></i><p id="low">{this.state.stock.low}</p>
                  </div>
                </div>
              </div>
            </div> 
        </div>
      )
  }
}

