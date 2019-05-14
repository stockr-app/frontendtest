import React, { Component } from "react";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <img className="img-fluid" src={logo} alt="Logo" />
        <h1 className="text-center">Under Construction!</h1>
      </div>

      //-----------Possible bootstrap model for carousel----------

      //   <div id="demo" className="carousel slide" data-ride="carousel">
      //     <ul className="carousel-indicators">
      //       <li data-target="#demo" data-slide-to="0" className="active" />
      //       <li data-target="#demo" data-slide-to="1" />
      //     </ul>

      //     <div className="carousel-inner">
      //       <div className="carousel-item active">
      //         <img className="img-fluid mx-auto d-block" src={logo} alt="Logo" />
      //       </div>
      //       <div className="carousel-item">
      //         <div className="carousel-caption">
      //           <h1 className="text-center">Under Construction!</h1>
      //         </div>
      //       </div>
      //     </div>

      //     <a className="carousel-control-prev" href="#demo" data-slide="prev">
      //       <span className="carousel-control-prev-icon" />
      //     </a>
      //     <a className="carousel-control-next" href="#demo" data-slide="next">
      //       <span className="carousel-control-next-icon" />
      //     </a>
      //   </div>
    );
  }
}

export default LandingPage;
