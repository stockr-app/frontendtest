import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Newsview from "../NewsComponent/NewsView";
import Ticker from '../Ticker/Ticker';
import News from '../News/NewsView'
import './Dashboard.css'
import QuickSearch from '../QuickSearch/QuickSearch'
export default class Dashboard extends Component {
    constructor() {
        super ();
        this.state = {
        }
    }

    updateSearch (e) {
        this.setState({search: e.target.value})
    }
    render() {

        let filteredArticles = this.props.articles
        console.log(filteredArticles)

        return (
            <div className = 'container'>

                <div className = 'ticker'>
                    <Ticker />
                    <p>Dashboard</p>
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
