import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import "./Header.css";
import Darkmode from '../Darkmode/Darkmode';
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
              <i className="fas fa-home" />
              <div className="headerTime">
              <p className="todaysDate">{moment().format("MMMM-DD-YYYY")}</p>
              </div>
              <div id="icons" >
                <i className="fas fa-cog" />
                <i className="fas fa-file-invoice-dollar" />
                <i class="fas fa-cloud-moon"></i>
              </div>

          </div>

        </nav>

      </div>
    );
  }
}
