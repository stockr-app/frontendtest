import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AA from "./AA.png";
import AO from "./AO.png";
import MB from "./MB.png";
import MR from "./MR.png";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="image-container">
          <div className="profile-image">
            <img src={AA} alt="AA" className="image" />
            <div>Andrew Armstrong</div>
            <a className="link" href="https://github.com/acarmstrong98">
              <i class="fab fa-github" />
            </a>
            <a className="link" href="">
              <i class="fab fa-linkedin" />
            </a>
          </div>
          <div className="profile-image">
            <img src={AO} alt="AO" className="image" />
            <div>Andrew Ogle</div>
            <a className="link" href="https://github.com/andrewogle">
              <i class="fab fa-github" />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/andrew-ogle-574ba759/"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
          <div className="profile-image">
            <img src={MB} alt="MB" className="image" />
            <div>Marcus Bass</div>
            <a className="link" href="https://github.com/marcusbass323">
              <i class="fab fa-github" />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/marcus-bass-7598b6106/"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
          <div className="profile-image">
            <img src={MR} alt="MR" className="image" />
            <div>Mitchell Robles</div>
            <a className="link" href="https://github.com/mitchellr92">
              <i class="fab fa-github" />
            </a>
            <a
              className="link"
              href="https://www.linkedin.com/in/mitchell-robles-aa7980165/"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
