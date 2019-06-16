import React, { Component } from 'react'
import Header from '../Header/Header'
import Ticker from '../Ticker/Ticker';

export default class KeyIndicators extends Component {
    render() {
        return (
            <div>
                <Header />
                <Ticker />
                <h1>KeyIndicators</h1>
            </div>
        )
    }
}
