import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';

export default class Stocktable extends Component {

    state = {
        user_id: '',
        stock: ""

    }

    componentDidMount(){       
        let data = JSON.parse(sessionStorage.getItem('STATE'));
        this.setState({user_id: data.user_id});
      }

      addStock(){
        axios
        .get(`https://sandbox.iexapis.com/stable/stock/${this.state.symbol}/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`)
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


    render() {

        // let stock = this.state.stock.map((stock) => {
            return (
                <div>
                {/* <a href="#/" onClick={this.fetchStocks}>Search a symbol</a>    
                    <input
                    className="stockSearch"
                    type="text"
                    name="symbol"
                    onChange={this.inputChange}
                    value={this.state.symbol}
                    />
              <tr key={stock.symbol}>
                <td>{stock.open}</td>
                <td>{stock.close}</td>
                <td>{stock.high}</td>
                <td>{stock.low}</td>
                <td>{stock.change}</td>
                <td>{stock.volume}</td>
                <td>{stock.peRatio}</td>
                <td>{stock.week52High}</td>
                <td>{stock.week52Low}</td>
              </tr>                                 */}
              </div>
            )
        //   });
      
return (
    
    <Table id="CustomersTable">
    <thead>
      <tr>
        <th>#</th>
        <th>Email</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>IP</th>
        <th>Latitude</th>
        <th>Longitude</th>
        <th>Created On</th>
        <th>Updated On</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* {stock} */}
    </tbody>
  </Table>
)

    }
}
