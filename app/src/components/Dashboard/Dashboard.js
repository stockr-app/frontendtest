import React, { Component } from 'react';
import Ticker from '../Ticker/Ticker';
import News from '../News/NewsView'
import './Dashboard.css';
import QuickSearch from '../QuickSearch/QuickSearch';
import Footer from '../Footer/Footer';
import Reports from '../Reports/Reports';
import NavBar from '../NavBar/NavBar';

export default class Dashboard extends Component {
    constructor() {
        super ();
        this.state = {
        }
    }

    render() {



        return (
            <div>
                <Ticker />
                <NavBar />
                <QuickSearch />
                    <div className="Dashboard">
                    <div className="News">
                    <News />
                    <Reports />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
