import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="splashNav">
                    <img className="splashLogo" alt="StockrLogo" src={require("../../components/Header/stockrlogo.png")}/>
                    <div className="socialBar">
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-twitter-square"></i></a>
                    <a href=""><i class="fab fa-linkedin"></i></a>
                    </div>
                </nav>
            </div>
        )
    }
}
