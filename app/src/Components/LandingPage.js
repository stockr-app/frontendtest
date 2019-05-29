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
          Sign up
        </button>

        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Title</ModalHeader>

          <ModalBody>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </ModalBody>

          <ModalFooter>
            <button color="primary">Sign Up</button>

            <button color="secondary" onClick={this.toggleModal.bind(this)}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default LandingPage;
