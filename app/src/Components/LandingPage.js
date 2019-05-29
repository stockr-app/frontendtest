import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import logo from "./logo.png";
import finance1 from "../Images/finance1.jpg";
import finance2 from "../Images/finance2.jpg";
import finance3 from "../Images/finance3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

class LandingPage extends Component {
  state = {
    modalIsOpen: false
  };

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

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
          onClick={this.toggleModal.bind(this)}
        >
          Sign In
        </button>

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Sign In</ModalHeader>

          <ModalBody>
            <div className="form-group">
              <label for="usr">Username:</label>
              <input type="text" className="form-control" id="usr" />
            </div>
            <div>
              <label for="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
          </ModalBody>

          <ModalFooter>
            <button className="btn btn-primary">Sign In</button>

            <button className="btn btn-secondary" onClick={this.toggleModal.bind(this)}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LandingPage;
