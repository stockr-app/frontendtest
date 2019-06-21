import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="splashNav">
          <img
            className="splashLogo"
            alt="StockrLogo"
            src={require("../../components/Header/stockrlogo.png")}
          />
          <div className="vertical-menu">
            <Link id="Link" to="/home">
              <i className="fas fa-home" />
              Home
            </Link>
            <Link id="Link" to="/reports">
              <i class="far fa-sticky-note" />
              Reports
            </Link>
            <Link id="Link" to="/targets">
              <i class="fas fa-crosshairs" />
              Targets
            </Link>
            <Link id="Link" to="/keyIndicators">
              <i class="fas fa-address-card" />About Us
            </Link>
            <Link id="Link" to="/settings">
              <i class="fas fa-cog" />
              Account Settings
            </Link>
            <Link id="Link" to="/billing">
              <i class="fas fa-file-invoice-dollar" />
              Billing
            </Link>
          </div>
          {/* <div className="socialBar">
                    <a href=""><i className="fab fa-facebook"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-twitter-square"></i></a>
                    <a href=""><i className="fab fa-linkedin"></i></a>
                    </div> */}
        </nav>
      </div>
    );
  }
}
