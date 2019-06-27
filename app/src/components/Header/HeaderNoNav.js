import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import moment from "moment";

export default class HeaderNoNav extends Component {
  render() {
    return (
      <div>
        <nav className="splashNav">
          <img
            className="splashLogo"
            alt="StockrLogo"
            src={require("../../components/Header/stockrlogo.png")}
          />         
        </nav>
        <div className="headerTime">
        <p className="todaysDate">{moment().format("MMMM-DD-YYYY")}</p>
        </div>
      </div>
    );
  }
}
