import React, { Component } from 'react';
import Header from '../Header/Header';
import Ticker from '../Ticker/Ticker';
import MSFT from '../MSFT';
import NavBar from '../NavBar/NavBar';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Ticker />
            </div>
        )
    }
}
