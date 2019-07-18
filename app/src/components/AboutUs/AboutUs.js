import React, { Component } from "react";
import "./AboutUs.css";
import AA from "./AA.png";
import AO from "./AO.png";
import MB from "./MB.png";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="image-container">
          <div className="profile-image">
            <img src={AA} alt="AA" className="image" />
            <div className="name">Andrew Armstrong</div>
            <a className="link" href="https://github.com/acarmstrong98">
              <i className="fab fa-github" />
            </a>
            <a className="link" href="/">
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="profile-image">
            <img src={AO} alt="AO" className="image" />
            <div className="name">Andrew Ogle</div>
            <a className="link" href="https://github.com/andrewogle">
              <i className="fab fa-github" />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/andrew-ogle-574ba759/"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div className="profile-image">
            <img src={MB} alt="MB" className="image" />
            <div className="name">Marcus Bass</div>
            <a className="link" href="https://github.com/marcusbass323">
              <i className="fab fa-github" />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/marcus-bass-7598b6106/"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
