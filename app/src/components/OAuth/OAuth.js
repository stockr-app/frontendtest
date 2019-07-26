import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import moment from 'moment';
import './OAuth.css';

export default class Splash extends Component {

  state = {
      user_id:"",
      first_name: "",
      last_name: "",
      email: "",
      premium: "false",   
      redirect: false,
      sign_up_date: moment().format("MMMM-DD-YYYY"),
      showLogin: false
    }

    constructor(props, context) {
      super(props, context);
      this.onSuccess = this.onSuccess.bind(this);
      this.responseFacebook = this.responseFacebook.bind(this);
};

toggleLoginHandler = () => {
  const isVisible = this.state.showLogin;
  this.setState({
    showLogin: !isVisible
    });
  }

  onSuccess(resp) {
      this.setState({
        first_name: resp.profileObj.givenName,
        last_name: resp.profileObj.familyName,
        email: resp.profileObj.email,
        user_id: resp.profileObj.googleId
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
  sessionStorage.setItem('STATE', JSON.stringify(this.state));  
    axios.post('https://stocking.firebaseio.com/users/.json?auth=qorpL6CkR2Qc5JGiMYCobKt6AV2BG9b1ydmkjqJ4', this.state)
  .then((response) => {
    console.log(response)
    this.setState({ 
      redirect: true
    })
    
  });
}



  render() {

    let Login = null;
    if (this.state.showLogin) {
      Login = (
        <form id="OAuthform" className="OAuthform">    
        <p>Welcome</p>          
        <input id="formInput" type="text" defaultValue={this.state.first_name || this.state.first_name}></input>
        <a className="formButton" >REGISTER HERE</a>
        <p className="buttonFixed" onClick={this.addUser}>REGISTER HERE</p>
        <p className="formEnd">to use this application.</p>
        </form> 
      );
    }

    let fbContent;
    let googleContent;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/app/home'/>;
    }
     
      fbContent = (
        <FacebookLogin
          appId="274333116817522"
          autoLoad={false}
          fields="first_name,last_name,email"
          onClick={this.facebookClicked}
          callback={this.responseFacebook}
          cssClass="btnFacebook"
          textButton='Sign in with Facebook'
          onClick={this.toggleLoginHandler}
          />

      );

      googleContent = (
        
        <GoogleLogin
            clientId="432634226022-37hop4nb2mal0810tile8vmlkf8f1rs3.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            autoLoad={false}
            icon={false}
            onClick={this.googleClicked}
            onSuccess={resp => this.onSuccess(resp, console.log(resp))}
            cookiePolicy={'single_host_origin'}
            className="btnGoogle"    
            onClick={this.toggleLoginHandler}    
            />
      );
    
    return (
<div>   
        <div className="splashContent">  
            <div className="splashForm">
            <div className="OAuth">
            <div>{fbContent}</div>
            <div>{googleContent}</div>
            </div>
            <div>{Login}</div>
            </div>
        </div>
    </div>
    )}
}
