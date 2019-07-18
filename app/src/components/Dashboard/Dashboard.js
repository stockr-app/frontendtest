import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Newsview from "./NewsComponent/NewsView";
import Ticker from '../Ticker/Ticker';
import Search from './Search/Search'


export default class Dashboard extends Component {
    constructor() {
        super ();
        this.state = {
        }
    }

    render() {



        return (
            <div className = 'container'>

                <div className = 'ticker'>
                    <Ticker />
                    <p>Dashboard</p>
                </div>

                <div className = 'stockSearch'>
                    <Search />
                </div>

                <div className="news-panel">
                    <h1>Financial News</h1>
                    <div className = 'article'>
                    <Newsview />
                    </div>
                </div>

            </div>
        )
    }
}
