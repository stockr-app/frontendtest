import React, { Component } from 'react';
import Header from '../Header/Header';
import Ticker from '../Ticker/Ticker';


export default class Targets extends Component {
    render() {
        return (
            <div>
                <Header />
                <Ticker />
                <h1>Targets</h1>
            </div>
        )
    }
}
