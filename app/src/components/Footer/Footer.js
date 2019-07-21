import React, { Component } from "react";
import "./Footer.css";
import AboutUs from '../AboutUs/AboutUs';

export default class Footer extends Component {
  
  openAboutUs(){
    document.getElementById("aboutUs").style.width = "100%";
  }
  
  closeAboutUs(){
    document.getElementById("aboutUs").style.width = "0%";
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-lambda">Lambda School - 2019</div>
        <a href="#/" onClick={this.openAboutUs}>About Us</a>
        <div className="socialBar">
          <a href="/">
            <i className="fab fa-facebook icon" />
          </a>
          <a href="/">
            <i className="fab fa-instagram icon" />
          </a>
          <a href="/">
            <i className="fab fa-twitter-square icon" />
          </a>
          <a href="/">
            <i className="fab fa-linkedin icon" />
          </a>
        </div>
        <div id="aboutUs" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={this.closeAboutUs}>&times;</a>
  <div class="overlay-content">
    <AboutUs />
  </div>
</div>
      </div>
    );
  }
}
