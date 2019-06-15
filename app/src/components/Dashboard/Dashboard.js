import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Dashboard</h1>
                <Footer />
            </div>
        )
    }
}
