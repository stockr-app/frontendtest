import React, { Component } from 'react';
import axios from 'axios';
import './QuickSearch.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
export default class QuickSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
          stocks: [],
          symbol: ""
        };
      }

      fetchStocks = () => {
          console.log('Searching')
        axios
          .get(`https://sandbox.iexapis.com/stable/stock/${this.state.symbol}/quote?token=Tpk_521edcea4a3542dca944cb368cc0ec7b`)
          .then(response => {
            this.setState({ stocks: response.data});
            console.log(this.state)
          })
          .catch(err => {
            this.setState({ error: "Unrecognized Symbol" });
          });
      };

      inputChange = e => {
        this.setState({ symbol: e.target.value });
      };

    render() {

        return (
            <div>
                <a href="#/" onClick={this.fetchStocks}>Search a symbol</a>    
                    <input
                    className="stockSearch"
                    type="text"
                    name="symbol"
                    onChange={this.inputChange}
                    value={this.state.symbol}
                    />
                    <div id="Results">
                   <h1 className="companyName">{this.state.stocks.companyName}</h1>
                    <div className="searchResults">
                    <div>
                        <p>Symbol: {this.state.stocks.symbol}</p>
                        <p>Latest Price: {this.state.stocks.latestPrice}</p>
                    </div>
                    <div class="vl"></div>
                    <div>
                        <p>Exchange: {this.state.stocks.primaryExchange}</p>
                        <p>Calculation Price: {this.state.stocks.calculationPrice}</p>
                    </div>
                    <div class="v2"></div>
                    <div>
                        <p>Previous Close: {this.state.stocks.previousClose}</p>
                        <p>Change: {this.state.stocks.change}</p>
                    </div>
                    <div class="v3"></div>
                    <div>
                        <p>52 Week High: {this.state.stocks.week52High}</p>
                        <p>52 Week Low: {this.state.stocks.week52Low}</p>
                    </div>
                    <div class="v4"></div>
                    <div>
                        <p>YTD Change: {this.state.stocks.ytdChange}</p>
                        <p>peRatio: {this.state.stocks.peRatio}</p>
                    </div>
                    </div>
                </div>
                <Tabs>
    <TabList>
      <Tab>{this.state.stocks.symbol}</Tab>
      <Tab>Balance Sheet</Tab>
      <Tab>Cash Flow</Tab>
      <Tab>Earnings</Tab>
      <Tab>Estimates</Tab>
    </TabList>
 
    <TabPanel>
      <h2>Company Info</h2>
    </TabPanel>
    <TabPanel>
      <h2>Balance Sheet</h2>
    </TabPanel>
    <TabPanel>
      <h2>Cash Flow</h2>
    </TabPanel>
    <TabPanel>
      <h2>Earnings</h2>
    </TabPanel>
    <TabPanel>
      <h2>Estimates</h2>
    </TabPanel>
  </Tabs>
        </div>
        )
    }
}
