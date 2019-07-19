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
          <div className="horizontal-menu">
            <Link id="Link" to="/app/home">
              <i className="fas fa-home" />
              Home
            </Link>
            <Link id="Link" to="/app/reports">
              <i className="far fa-sticky-note" />
              Reports
            </Link>
            <Link id="Link" to="/app/settings">
              <i className="fas fa-cog" />
              Account Settings
            </Link>
            <Link id="Link" to="/app/billing">
              <i className="fas fa-file-invoice-dollar" />
              Billing
            </Link>
            <Link id="Link" to="/app/aboutus">
              <i className="fas fa-address-card" />About Us
            </Link>
          </div>
        </nav>
        {/* <div className="headerTime">
        <p className="todaysDate">{moment().format("MMMM-DD-YYYY")}</p>
        </div> */}
      </div>
    );
  }
}
