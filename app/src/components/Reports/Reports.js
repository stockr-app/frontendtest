import React, { Component } from 'react';
import Header from '../Header/Header';
import Ticker from '../Ticker/Ticker';


export default class q extends Component {
    render() {
        return (
            <div>
                <Header />
                <Ticker />
                <h1>Reports</h1>
            </div>
        )
    }
}
