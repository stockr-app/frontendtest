import React, { Component } from 'react';
import Ticker from '../Ticker/Ticker';
import News from '../News/NewsView'
import './Dashboard.css';
import QuickSearch from '../QuickSearch/QuickSearch';
import Footer from '../Footer/Footer';
import Reports from '../Reports/Reports';
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Ticker />
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
