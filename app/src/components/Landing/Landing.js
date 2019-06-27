import React, { Component } from 'react';
import './Landing.css';
import ReactPlayer from 'react-player'
import Ticker from '../Ticker/Ticker'
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import {Modal, Button} from 'react-bootstrap';


export default class Landing extends Component {
  render() {
    return (
      <div>
    
        <Ticker />
        <div className="overlay">
        <Modal.Dialog
        size="lg"
        centered
        >
<h1>Login to Stockr</h1>
<div className="landingOauth">

      <FacebookLogin
          appId="274333116817522"
          autoLoad={false}
          fields="name,email"
          onClick={this.facebookClicked}
          callback={this.responseFacebook}
          cssClass="btnFacebook"
          textButton='Sign in with Facebook'
          />

      <GoogleLogin
            clientId="432634226022-37hop4nb2mal0810tile8vmlkf8f1rs3.apps.googleusercontent.com"
            autoLoad={false}
            icon={false}
            buttonText="Sign in with Google"
            onClick={this.googleClicked}
            onSuccess={resp => this.onSuccess(resp)}
            cookiePolicy={'single_host_origin'}
            className="btnGoogle"        
            />
  </div>
</Modal.Dialog>
</div>
        <div className="landingContent">        
          <div className="firstPane">
          <ReactPlayer 
          url='https://www.youtube.com/watch?v=hPzfn1yIoRw' 
          height='100%'
          width='100%'
          loop="true"
          controls="false"
          playing
          />
          </div>
          <div className="secondPane">
            <h2>Financial News</h2>
          </div>
        </div>
      </div>
    )
  }
}
