import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import './Splash.css';
import StripeCheckout from "react-stripe-checkout";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter as Router, Route} from "react-router-dom";
import HeaderNoNav from '../Header/HeaderNoNav';


export default class Facebook extends Component {

  state = {
      name: "",
      email: "",
      phoneNumber: "",
      premium: ""
    }

  onSuccess(resp) {
      this.setState({
        name: resp.profileObj.name,
        email: resp.profileObj.email
      })
  }

  responseFacebook = response => {
    this.setState({
      name: response.name,
      email: response.email,
    });
  };

  FakeRegister = () => {
    console.log(this.state)
  }

  addUser = () => {
    axios.post('https://stockrbackend.herokuapp.com/users', this.state).then((response) => {
    console.log(response)
    });
    document.getElementById("overlayLogo").style.display = "none";
  };

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
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

    const nameTooltip = (
      <Tooltip id="tooltip">
          <p>
             Please enter your full name.
          </p>
      </Tooltip>
  );

  const emailTooltip = (
    <Tooltip id="tooltip">
        <p>
           Please enter your email address.
        </p>
    </Tooltip>
);

const phoneTooltip = (
  <Tooltip id="tooltip">
      <p>
         We use your phone number to send you stock updates. No spam ever!
      </p>
  </Tooltip>
);

       
      fbContent = (
        <FacebookLogin
          appId="274333116817522"
          autoLoad={false}
          fields="name,email"
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
            onSuccess={resp => this.onSuccess(resp)}
            cookiePolicy={'single_host_origin'}
            className="btnGoogle"        
            />
      );
    

    function onToken(token) {
      alert(token);
    }

    function onClickMonthly(e){
      this.setState({premium: e.target.checked})
      console.log(onClickMonthly)
    }
   
    function onClickYearly(e){
      this.setState({premium: e.target.checked})
      console.log(onClickYearly)
    }
  

    return (
<div>
<HeaderNoNav />

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Get more with Stockr Premium!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                </p>
                        
          </Modal.Body>
            <Modal.Footer>
                            <StripeCheckout
                              token={onToken}
                              description="Stockr Premium Subscription"
                              panelLabel="Go Premium!"
                              image="https://i.ibb.co/nkd4hdr/Stockr-Logo-No-BG.png" 
                              amount="999"
                              currency="USD"
                              stripeKey="pk_test_VIG6vu8A1lvY50QaClqZWLm200rGu6pZrL"
                              label="Go Premium: $9.99/mo"
                            />

                            <StripeCheckout
                              token={onToken}
                              description="Stockr Premium Subscription"
                              panelLabel="Go Premium!"
                              image="https://i.ibb.co/nkd4hdr/Stockr-Logo-No-BG.png"  
                              amount="9999"
                              currency="USD"
                              stripeKey="pk_test_VIG6vu8A1lvY50QaClqZWLm200rGu6pZrL"
                              label="Go Premium: $99.99/yr"
                            />      
                               
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
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

          <div className="logoParent">
            <div className="splashLogoDiv">
                    <img className="splashBigLogo" alt="StockrLogo" src={require("../../components/Splash/StockrLogoNoBG.png")} />
            </div>

            <div className="splashLogoDiv2">
                    <img className="splashBigLogo2" id="overlayLogo" alt="StockrLogo" src={require("../../components/Splash/Stockrlogonostripenobg.png")} />
            </div>
          </div>
            <div className="splashForm">
                <form>
                    <h1>Sign Up</h1>
                    <h3>Name</h3>
                    <OverlayTrigger placement="bottom" overlay={nameTooltip}>
                      <input type="text" defaultValue={this.state.name || this.state.name}></input>
                    </OverlayTrigger>
                    <h3>Email</h3>
                    <OverlayTrigger placement="bottom" overlay={emailTooltip}>
                      <input type="text" defaultValue={this.state.email || this.state.email} ></input>
                    </OverlayTrigger>
                    <h3>Phone Number</h3>
                    <OverlayTrigger placement="bottom" overlay={phoneTooltip}>
                      <input type="text" name="phoneNumber" placeholder="phone number"></input>
                    </OverlayTrigger>

                    <br></br>
                    <br></br>
                    <div>
                        <div>{fbContent}</div>
                    </div>
                    <div>
                      <div>{googleContent}</div>
                    </div>
                </form>
                <br></br>
                <p>Learn more about <a href="#" onClick={this.handleShow}>Stockr Premium</a></p>
                <Button className="formButton" onClick={this.FakeRegister}>Register</Button>
                <img id="registerLogo" alt="StockrLogo" src={require("../../components/Splash/stockrlogo.png")}/>
            </div>
        </div>
        <Footer />
    </div>
    )}
}