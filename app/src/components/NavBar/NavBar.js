import React, { Component } from 'react'
import './NavBar.css'
export default class NavBar extends Component {
    render() {
        return (
            <nav className="Nav">
                <a href="#/">Reports</a>
                <a href="#/">My Portfolio</a>
                <a href="#/">IPO</a>
            </nav>
        )
    }
}
