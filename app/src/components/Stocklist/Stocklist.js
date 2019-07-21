import React, { Component } from 'react'

export default class Stocklist extends Component {
    
    state = {
        stocks: [],
        newStockData: {
            symbol: "",
            companyName: "",
            primaryExchange: "",
            calculationPrice: "",
            open: "",
            openTime: "",
            close: "",
            closeTime: "",
            high: "",
            low: "",
            latestPrice: "",
            latestSource: "",
            latestTime: "",
            latestUpdate: "",
            latestVolume: "",
            iexRealtimePrice: "",
            iexRealtimeSize: "",
            iexLastUpdated: "",
            delayedPrice: "",
            delayedPriceTime: "",
            extendedPrice: "",
            extendedChange: "",
            extendedChangePercent: "",
            extendedPriceTime: "",
            previousClose: "",
            previousVolume: "",
            change: "",
            changePercent: "",
            volume: "",
            iexMarketPercent: "",
            iexVolume: "",
            avgTotalVolume: "",
            iexBidPrice: "",
            iexBidSize: "",
            iexAskPrice: "",
            iexAskSize: "",
            marketCap: "",
            peRatio: "",
            week52High: "",
            week52Low: "",
            ytdChange: "",
            lastTradeTime: ""
        }
    }

    addStock() {
        axios.post('', this.state.newStockData).then((response) => {
          let { stocks } = this.state;
    
          stocks.push(response.data);
    
          this.setState({
            newStockData: {
                symbol: "",
                companyName: "",
                primaryExchange: "",
                calculationPrice: "",
                open: "",
                openTime: "",
                close: "",
                closeTime: "",
                high: "",
                low: "",
                latestPrice: "",
                latestSource: "",
                latestTime: "",
                latestUpdate: "",
                latestVolume: "",
                iexRealtimePrice: "",
                iexRealtimeSize: "",
                iexLastUpdated: "",
                delayedPrice: "",
                delayedPriceTime: "",
                extendedPrice: "",
                extendedChange: "",
                extendedChangePercent: "",
                extendedPriceTime: "",
                previousClose: "",
                previousVolume: "",
                change: "",
                changePercent: "",
                volume: "",
                iexMarketPercent: "",
                iexVolume: "",
                avgTotalVolume: "",
                iexBidPrice: "",
                iexBidSize: "",
                iexAskPrice: "",
                iexAskSize: "",
                marketCap: "",
                peRatio: "",
                week52High: "",
                week52Low: "",
                ytdChange: "",
                lastTradeTime: ""
            }
          });
        });
      }

      deleteStock(id) {
        axios.delete('' + id).then((response) => {
          this.refreshStocks();
        })
      }
    
      refreshStocks() {
        axios.get('').then((response) => {
          this.setState({
            stocks: response.data
          })
        })
      }

    render() {

        let customers = this.state.stocks.map((stocks) => {
            return (
              <tr key={stocks.id}>
                <td>{stocks.symbol}</td>
                <td>{stocks.companyName}</td>
                <td>
                  <Button color="danger" size="sm" onClick={this.deleteStock.bind(this, stocks.id)}>Delete</Button>    
                </td>
              </tr>
            )
          });

        return (
            <div>
                
            </div>
        )
    }
}
