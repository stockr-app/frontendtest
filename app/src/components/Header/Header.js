import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <span className="splashNav">
                    <img className="splashLogo" alt="StockrLogo" src={require("../../components/Header/stockrlogo.png")}/>
                </span>
            </div>
        )
    }
}
