import React, { Component } from "react";
import logo from "./logo.png";
import finance1 from "../Images/finance1.jpg";
import finance2 from "../Images/finance2.jpg";
import finance3 from "../Images/finance3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

class LandingPage extends Component {

  render() {
    return (
      <div className="container">
        <div>
          <img
            className="img-fluid mx-auto d-block my-5"
            src={logo}
            alt="Logo"
          />
        </div>

        <img
          className="img-fluid mx-auto d-block"
          src={finance3}
          alt="Finance 3"
        />

        <button
          type="button"
          className="btn btn-secondary btn-lg btn-block my-5"
          data-toggle="modal"
          data-target="#signUpModal"
        >
          Sign up
        </button>

        
      </div>
    );
  }
}

export default LandingPage;
