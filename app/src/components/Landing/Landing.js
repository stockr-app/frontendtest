import React, { Component } from 'react';
import './Landing.css';
import ReactPlayer from 'react-player';
import Ticker from '../Ticker/Ticker';
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import {Modal, Button} from 'react-bootstrap';
import HeaderNoNavLogin from '../Header/HeaderNoNavLogin';

export default class Landing extends Component {

  // state = {
  //   news: [],
  // }
  
  // componentDidMount() {
  //   axios.get('https://stocknewsapi.com/api/v1/category?section=alltickers&items=50&token=ibh6f0uwymhw9lxkqfb25hagrr9zassome19fxtx').then((response) => {
  //     this.setState({news: response.data})
  //   });
  // }
  
  render() {
    return (
      <div>
      <HeaderNoNavLogin />
      <div className="loginContainer">
        <div className="login">         
        </div>
     
      <div className="loginForm">
          <i class="fas fa-users fa-10x"></i>
          <h1>Stocking Login</h1>
          <div>
          <i class="far fa-user"></i>
          <input id="formInput" type="text" placeholder="USERNAME"></input>
          </div>
          <br></br>
          <div>
          <i class="fas fa-unlock"></i>
          <input id="formInput" type="text" placeholder="password"></input>
          </div>
          <br></br>
          <div>
          <input type="button" id="button" value="Login"></input>
          </div> 
        </div>  
        <div>     
          <ReactPlayer 
          url='https://youtu.be/LQiMbIBtPgE' 
          height='50vw'
          width='100vw'
          loop="true"
          controls="false"
          playing="true"
          volume="0"
          />
        </div>
      </div>
    </div>

    )
  }
}
