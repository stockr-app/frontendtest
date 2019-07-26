import React, { Component } from "react";
import './Splash.css';
import OAuth from '../OAuth/OAuth';
import Video from'./videoplayback.mp4'
export default class Splash extends Component {

  render() {

    return (
      <div>
          <video className='fullscreen-bg' autoPlay loop muted>
            <source src={Video} type='video/mp4' />
          </video>
      <div className="splashPage">
        <div className="splashContent"> 
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img id="registerLogo" alt="StockrLogo" src={require("../../components/Splash/stockrlogo.png")}/>
                  <p>A new way to find, monitor and enjoy your trading experience.</p>
                </div>
                  <div className="flip-card-back">
                    <p className="backContent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                      when an unknown printer took a galley of type and scrambled it to make a type 
                      specimen book. It has survived not only five centuries, but also the leap 
                      into electronic typesetting, remaining essentially unchanged.</p>
                  </div>
                </div>
            </div>
          </div>
        <div>   
        <OAuth />  
      </div> 
    </div>
    </div>

    )}
}