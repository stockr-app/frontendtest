import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
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
