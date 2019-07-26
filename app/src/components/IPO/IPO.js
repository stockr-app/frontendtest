import React, { Component } from 'react';
import axios from 'axios';

export default class IPO extends Component {

    state = {
        IPO: [],
      }
      
      componentDidMount() {
        axios.get('https://sandbox.iexapis.com/stable/stock/market/upcoming-ipos/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b').then((response) => {
          this.setState({IPO: response.data})
          console.log('IPO',response)
        });
      }

    render() {
        return (
            <div>
                <p>{this.state.IPO.companyName}</p>
            </div>
        )
    }
}
