import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import moment from "moment";

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
            <Link id="Link" to="/home">
              <i className="fas fa-home" />
              Home
            </Link>
            <Link id="Link" to="/reports">
              <i className="far fa-sticky-note" />
              Reports
            </Link>
            <Link id="Link" to="/targets">
              <i className="fas fa-crosshairs" />
              Targets
            </Link>
            <Link id="Link" to="/keyIndicators">
              <i className="fas fa-address-card" />About Us
            </Link>
            <Link id="Link" to="/settings">
              <i className="fas fa-cog" />
              Account Settings
            </Link>
            <Link id="Link" to="/billing">
              <i className="fas fa-file-invoice-dollar" />
              Billing
            </Link>
          </div>
        </nav>
        <div className="headerTime">
        <p className="todaysDate">{moment().format("MMMM-DD-YYYY")}</p>
        </div>
      </div>
    );
  }
}
