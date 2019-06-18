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
            <Link className="link"><i class="fab fa-github"></i></Link>
            <Link className="link"><i class="fab fa-linkedin"></i></Link>
          </div>
          <div className="profile-image">
            <img src={AO} alt="AO" className="image" />
            <div>Andrew Ogle</div>
            <Link className="link"><i class="fab fa-github"></i></Link>
            <Link className="link"><i class="fab fa-linkedin"></i></Link>
          </div>
          <div className="profile-image">
            <img src={MB} alt="MB" className="image" />
            <div>Marcus Bass</div>
            <Link className="link"><i class="fab fa-github"></i></Link>
            <Link className="link"><i class="fab fa-linkedin"></i></Link>
          </div>
          <div className="profile-image">
            <img src={MR} alt="MR" className="image" />
            <div>Mitchell Robles</div>
                    <Link className="link" to={"https://github.com/mitchellr92"}><i class="fab fa-github"></i></Link>
            <Link className="link"><i class="fab fa-linkedin"></i></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
