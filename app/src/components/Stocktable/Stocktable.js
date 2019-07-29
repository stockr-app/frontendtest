import React, { Component } from 'react'
import axios from 'axios';
import { Table, Button } from 'reactstrap';

export default class Stocktable extends Component {

    state = {
        user_id: '',
        stock: ""

    }

    componentWillMount() {
      console.log('STATE', this.state.stock)
      axios.get('https://stockr-stocks.firebaseio.com/stocks/-Lkw8f7oBgVuGB6ECeqV.json/').then((response) => {
        this.setState({
          stock: response.data
        })
      });
    }

    componentDidMount(){       
        let data = JSON.parse(sessionStorage.getItem('STATE'));
        this.setState({user_id: data.user_id});
      }

      addStock(){
        axios
        .get(`https://stockr-stocks.firebaseio.com/stockr-stocks.json/`)
        .then(response => {
          this.setState({ stock: response.data});
        })
        .catch(err => {
          this.setState({ error: "Unrecognized Symbol" });
        });
      }

      inputChange = e => {
        this.setState({ stock: e.target.value });
      };

      refreshStocks() {
        axios.get('https://stockr-stocks.firebaseio.com/stocks/-Lkw8f7oBgVuGB6ECeqV.json/').then((response) => {
          this.setState({
            stock: response.data
          })
          console.log('REFRESHSTOCK', this.state.stock.symbol)
        })
      }
  
    render() {
      

  return (
    <div>
    <Table>
    <thead>
      <tr>
        <th>Symbol</th>
        <th>Company Name</th>
        <th>high</th>
        <th>low</th>
        <th>Volume</th>
        <th>Change</th>
        <th>52 Week High</th>
        <th>52 Week Low</th>
        <th>Last Update</th>
      </tr>
    </thead>
    <tbody>
    <tr>
<td>{this.state.stock.symbol}</td>
<td>{this.state.stock.companyName}</td>
<td>{this.state.stock.high}</td>
<td>{this.state.stock.low}</td>
<td>{this.state.stock.volume}</td>
<td>{this.state.stock.change}</td>
<td>{this.state.stock.week52High}</td>
<td>{this.state.stock.week52Low}</td>
<td>{this.state.stock.latestTime}</td>
</tr> 
    </tbody>
  </Table>
    </div>

    )
  }
}   




