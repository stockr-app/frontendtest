import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
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
      premium: false,   
      redirect: false,
      sign_up_date: moment().format("MMMM-DD-YYYY"),
      showLogin: false,
      timestamp: 201907280745
    }

    constructor(props, context) {
      super(props, context);
      this.onSuccess = this.onSuccess.bind(this);
      this.responseFacebook = this.responseFacebook.bind(this);
};

toggleLoginHandler = () => {
  console.log('FIRED')
  const isVisible = this.state.showLogin;
  this.setState({
    showLogin: !isVisible
    });
  }

  onSuccess(resp) {
    console.log("Response", resp)
      this.setState({
        first_name: resp.profileObj.givenName,
        last_name: resp.profileObj.familyName,
        email: resp.profileObj.email,
        user_id: resp.profileObj.googleId
      })
      console.log("State", this.state)
  }

  responseFacebook = response => {
    this.setState({
      first_name: response.first_name,
      last_name: response.last_name,
      email: response.email,
      user_id: response.id
    });
  };

  hours = moment().format("HH");
  minutes = 60 - moment().format("mm");
  seconds = 60 - moment().format("ss");
  day = moment().format("DD");
  month = moment().format("MM");
  year = moment().format("YYYY");
  
  timestamp = this.year + this.month + this.day + this.minutes + this.seconds;

addUser = () => {
  console.log('STATE', this.state)
  console.log('Timestamp', this.timestamp)
  sessionStorage.setItem('STATE', JSON.stringify(this.state));  
    axios.post('http://stockrapp-env.us-west-2.elasticbeanstalk.com/api/stock ', this.state)
  .then((response) => {
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
          callback={this.responseFacebook}
          cssClass="btnFacebook"
          textButton='Sign in with Facebook'
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
            onClick={this.googleClicked}
            />
      );
    
    return (
<div>   
        <div className="splashContent">  
            <div className="splashForm">
            <div className="OAuth">
            <div onClick={this.toggleLoginHandler}
              >{fbContent}</div>
            <div onClick={this.toggleLoginHandler}               
              >{googleContent}</div>
            </div>
            <div>{Login}</div>
            </div>
        </div>
    </div>
    )}
}
