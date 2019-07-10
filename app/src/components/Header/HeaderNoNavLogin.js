import React, { Component } from "react";
import "./HeaderNoNavLogin.css";

export default class HeaderNoNav extends Component {
  render() {
    return (
        <div className="HeaderNoNav">
          <img
            id="logo"
            alt="StockrLogo"
            src={require("../../components/Header/stockrlogo.png")}
         />    
         <div className="loginSignup">
             <p>Login</p>
             <a href="/">Sign Up</a>
        </div>     
        </div>
    );
  }
}
