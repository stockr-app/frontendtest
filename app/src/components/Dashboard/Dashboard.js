import React, { Component } from 'react';
import Ticker from '../Ticker/Ticker';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Ticker />
                <p>Dashboard</p>
            </div>
        )
    }
}
