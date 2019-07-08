import React, { Component } from 'react';
import './Landing.css';
import ReactPlayer from 'react-player'
import FacebookLogin from "react-facebook-login";
import GoogleLogin from 'react-google-login';
import {Modal} from 'react-bootstrap';
import axios from 'axios';
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
          <h1>Stocking Login</h1>
          <div>
          <p>User Name</p>
          <input id="formInput" type="text"></input>
          </div>
          <br></br>
          <div>
          <p>Password</p>
          <input id="formInput" type="text"></input>
          </div>
          <br></br>
          <div>
          <input type="button" value="Login"></input>
          </div>
        </div>
          {/* 
            <Modal.Dialog size="md" centered>
              <div className="modalContent">
                <div className="modalHeader">
                <h1>Login to Stocking</h1>
                </div>
                <div className="modalImages">
                  <img id="modalImg" alt="" src="https://i.ibb.co/2nvS8SN/image-from-rawpixel-id-1078991-original.jpg"/>
                  <img id="modalImg" alt="" src="https://i.ibb.co/MDJtxYM/analytics-chart-charts-920116.jpg"/>
                  <img id="modalImg" alt="" src="https://i.ibb.co/QftkXmn/banking-barefoot-beautiful-2316084.jpg"/>
                  <img id="modalImg" alt="" src="https://i.ibb.co/TW04NqM/adult-business-chair-2422278.jpg"/>
                </div>
                <br></br>
                <div className="landingOauth">
              </div> 
              </div> 
            </Modal.Dialog>
          */}
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
