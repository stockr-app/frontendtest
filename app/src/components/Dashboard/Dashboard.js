import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NewsView from "../NewsComponent/NewsView";
import Ticker from '../Ticker/Ticker';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                    <Ticker />
                    <p>Dashboard</p>
                </div>

                <div className="news-panel">
                    <h2>Financial News</h2>
                    <NewsView />
                </div>
            </div>
        )
    }
}
