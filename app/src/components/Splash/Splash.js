import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import './Splash.css';
import StripeCheckout from "react-stripe-checkout";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import HeaderNoNav from '../Header/HeaderNoNav';
import { Redirect } from 'react-router-dom'
import moment from 'moment';

export default class Splash extends Component {

  
  state = {
      username:"",
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
      premium: "",   
      redirect: false,
      sign_up_date: moment().format("MMMM-DD-YYYY")
    }

    constructor(props, context) {
      super(props, context);

this.handleShow = this.handleShow.bind(this);
this.handleClose = this.handleClose.bind(this);
};

  onSuccess(resp) {
      this.setState({
        first_name: resp.profileObj.givenName,
        last_name: resp.profileObj.familyName,
        email: resp.profileObj.email,
      })
      console.log(this.state)
  }

  responseFacebook = response => {
    this.setState({
      first_name: response.first_name,
      last_name: response.last_name,
      email: response.email,
    });
  };

addUser = () => {
    axios.post('https://stocking.firebaseio.com/users/.json?auth=qorpL6CkR2Qc5JGiMYCobKt6AV2BG9b1ydmkjqJ4', this.state)
  .then((response) => {
    console.log(response)
    this.setState({ 
      redirect: true
    })
  });
}

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    let fbContent;
    let googleContent;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/app/home'/>;
    }

    const firstnameTooltip = (
      <Tooltip className="tooltip">
          <p>
             Please enter your first name.
          </p>
      </Tooltip>
  );

  const lastnameTooltip = (
    <Tooltip className="tooltip">
        <p>
           Please enter your last name.
        </p>
    </Tooltip>
);

  const emailTooltip = (
    <Tooltip className="tooltip">
        <p>
           Please enter your email address.
        </p>
    </Tooltip>
);

const phoneTooltip = (
  <Tooltip className="tooltip">
      <p>
         We use your phone number to send you stock updates. No spam ever!
      </p>
  </Tooltip>
);

       
      fbContent = (
        <FacebookLogin
          appId="274333116817522"
          autoLoad={false}
          fields="first_name,last_name,email"
          onClick={this.facebookClicked}
          callback={this.responseFacebook}
          cssClass="btnFacebook"
          textButton='Sign up with Facebook'
          />

      );

      googleContent = (
        <GoogleLogin
            clientId="432634226022-37hop4nb2mal0810tile8vmlkf8f1rs3.apps.googleusercontent.com"
            buttonText="Sign up with Google"
            autoLoad={false}
            icon={false}
            onClick={this.googleClicked}
            onSuccess={resp => this.onSuccess(resp, console.log(resp))}
            cookiePolicy={'single_host_origin'}
            className="btnGoogle"        
            />
      );
    

    function onToken(token) {
      alert(token);
    }

    return (
<div className="splashPage">
<HeaderNoNav />
        <Modal show={this.state.show} onHide={this.handleClose} size="md">
          <div id="Modal">
            <Modal.Header closeButton>
              <Modal.Title>Get more with Stockr Premium!</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    <p id="modalContent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut gravida, erat at semper semper, elit dui accumsan purus, 
                        nec tristique neque est ac odio. Proin sodales, orci non 
                        condimentum aliquam, erat lacus sollicitudin arcu, vel auctor 
                        ex justo sit amet neque. Etiam at cursus lacus, vel laoreet 
                        leo. Aenean efficitur nulla in ante vulputate, et pretium ex 
                        maximus. Praesent condimentum metus id cursus interdum. In 
                        hac habitasse platea dictumst. Curabitur turpis neque, 
                        cursus feugiat auctor sit amet, faucibus convallis libero.             
                        </p>                        
                  </Modal.Body>
                    <Modal.Footer>
                            <StripeCheckout
                              token={onToken}
                              description="Stockr Premium Subscription"
                              panelLabel="Go Premium!"
                              image="https://i.ibb.co/nkd4hdr/Stockr-Logo-No-BG.png" 
                              amount = {999}
                              currency="USD"
                              stripeKey="pk_test_VIG6vu8A1lvY50QaClqZWLm200rGu6pZrL"
                              label="Go Premium: $9.99/mo"
                            />

                            <StripeCheckout
                              token={onToken}
                              description="Stockr Premium Subscription"
                              panelLabel="Go Premium!"
                              image="https://i.ibb.co/nkd4hdr/Stockr-Logo-No-BG.png"  
                              amount={9999}
                              currency="USD"
                              stripeKey="pk_test_VIG6vu8A1lvY50QaClqZWLm200rGu6pZrL"
                              label="Go Premium: $99.99/yr"
                            />                                    
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
              </div>
            </Modal>
        <div className="splashContent"> 
            <div className="splashText">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut gravida, erat at semper semper, elit dui accumsan purus, 
                nec tristique neque est ac odio. Proin sodales, orci non 
                condimentum aliquam, erat lacus sollicitudin arcu, vel auctor 
                ex justo sit amet neque. Etiam at cursus lacus, vel laoreet 
                leo. Aenean efficitur nulla in ante vulputate, et pretium ex 
                maximus. Praesent condimentum metus id cursus interdum. In 
                hac habitasse platea dictumst. Curabitur turpis neque, 
                cursus feugiat auctor sit amet, faucibus convallis libero. 
                Pellentesque eu condimentum ipsum, a laoreet lacus. Praesent 
                consectetur tempor lorem et iaculis. Cras porta fringilla 
                neque, eu molestie est viverra eu. Pellentesque eu condimentum ipsum, 
                a laoreet lacus. Praesent consectetur tempor lorem et iaculis. Cras 
                porta fringilla neque, eu molestie est viverra eu. Cras 
                porta fringilla neque, eu molestie est viverra eu. Cras 
                porta fringilla neque, eu molestie est viverra eu. 
                </p>
            </div>
            <div className="splashForm">
                <form>
                  
                  <h1>Register For Access</h1>
                    <OverlayTrigger placement="bottom" overlay={firstnameTooltip}>
                      <input id="formInput" type="text" placeholder="First name" defaultValue={this.state.first_name || this.state.first_name}></input>
                    </OverlayTrigger>
                    <br></br>
                    <OverlayTrigger placement="bottom" overlay={lastnameTooltip}>
                      <input id="formInput" type="text" placeholder="Last name" defaultValue={this.state.last_name || this.state.last_name}></input>
                    </OverlayTrigger>
                    <br></br>
                    <OverlayTrigger placement="bottom" overlay={emailTooltip}>
                      <input id="formInput" type="text" placeholder="Email" defaultValue={this.state.email || this.state.email} ></input>
                    </OverlayTrigger>
                    <br></br>
                    <OverlayTrigger placement="bottom" overlay={phoneTooltip}>
                      <input id="formInput" type="text" name="phoneNumber" placeholder="Phone Number"></input>
                    </OverlayTrigger>
                    <br></br>
                    <p>or</p>
                    <div>{fbContent}</div>
                    <div>{googleContent}</div>
                </form>
                <br></br>
                <p>Learn more about <a href="#/" onClick={this.handleShow}>Stockr Premium</a></p>
                <Button  className="formButton" onClick={this.addUser}>Register</Button>
                <img id="registerLogo" alt="StockrLogo" src={require("../../components/Splash/stockrlogo.png")}/>
            </div>
        </div>
    </div>
    )}
}