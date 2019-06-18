import React, { Component } from 'react';
import Header from '../Header/Header';
import Ticker from '../Ticker/Ticker';
import NavBar from '../NavBar/NavBar';

export default class q extends Component {
    render() {
        return (
            <div>
                <Header />
                <Ticker />
                <NavBar />
            </div>
        )
    }
}
