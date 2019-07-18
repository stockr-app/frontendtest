import React, { Component } from "react";
import "./HeaderNoNav.css";

export default class HeaderNoNav extends Component {
  render() {
    return (
        <div className="HeaderNoNav">
          <img
            id="logo"
            alt="StockrLogo"
            src={require("../../components/Header/stockrlogo.png")}
         />         
        </div>
    );
  }
}
