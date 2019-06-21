import React, { Component } from 'react';
import Header from '../Header/Header';
import Ticker from '../Ticker/Ticker';
import NavBar from '../NavBar/NavBar';

export default class Targets extends Component {
    render() {
        return (
            <div>
                <Ticker />
                <p>Targets</p>
            </div>
        )
    }
}
