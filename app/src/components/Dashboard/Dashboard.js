import React, { Component } from 'react';
import Header from '../Header/Header';
import Ticker from '../Ticker/Ticker';
import MSFT from '../MSFT';
import StockCardView from '../MSFT';
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Ticker />
                <StockCardView />
            </div>
        )
    }
}
