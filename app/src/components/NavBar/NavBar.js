import React, { Component } from 'react'
import './NavBar.css'
export default class NavBar extends Component {
    render() {
        return (
            <nav className="Nav">
                <a className="aNav" href="#/">REPORTS</a>
                <a className="aNav" href="#/">MY PORTFOLIO</a>
                <a className="aNav" href="#/">IPO</a>
                <a className="aNav" href="#/">NEWS</a>
            </nav>
        )
    }
}
