import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import "./Header.css";
import Darkmode from '../Darkmode/Darkmode';

export default class Header extends Component {

  openScreenSaver(){
    document.getElementById("myNav").style.width = "100%";
  }
  
  closeScreenSaver(){
    document.getElementById("myNav").style.width = "0%";
  }

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
                <a><i className="fas fa-cog" /></a>
                <a><i className="fas fa-file-invoice-dollar" /></a>
                <a href="#/" onClick={this.openScreenSaver}><i class="fas fa-cloud-moon"></i></a>
              </div>
          </div>
        </nav>
        <div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={this.closeScreenSaver}>&times;</a>
  <div class="overlay-content">
    <h1>Screensaver</h1>
  </div>
</div>
      </div>
    );
  }
}
