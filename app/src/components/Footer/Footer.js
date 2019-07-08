import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-lambda">Lambda School - 2019</div>
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
      </div>
    );
  }
}
