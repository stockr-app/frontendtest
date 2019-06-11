import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="splashNav">
                    <img className="splashLogo" alt="StockrLogo" src={require("../../components/Header/stockrlogo.png")}/>
                </nav>
            </div>
        )
    }
}
