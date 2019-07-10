import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-lambda">Lambda School - 2019</div>
        <div className="socialBar">
          <a href="/">
            <i className="fab fa-facebook" />
          </a>
          <a href="/">
            <i className="fab fa-instagram" />
          </a>
          <a href="/">
            <i className="fab fa-twitter-square" />
          </a>
          <a href="/">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    );
  }
}
