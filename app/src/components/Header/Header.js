import React, { Component } from 'react'
import moment from 'moment';
import "./Header.css";
import Countdown from '../Countdown/Countdown';
export default class Header extends Component {
      
      state = {
      first_name: ''
      }

      componentDidMount(){
        
        let data = JSON.parse(sessionStorage.getItem('STATE'));
        console.log(data)
        this.setState({
        first_name: data.first_name,
        });
      }

      openScreenSaver(){
        document.getElementById("myNav").style.width = "100%";
      }
  
      closeScreenSaver(){
        document.getElementById("myNav").style.width = "0%";
      }

      Logout(){
        console.log('Logging out')
        sessionStorage.removeItem("STATE");
      }

  render() {
    return (
      <div>
        <div>
         <div className="B">
           <img className="splashLogo" alt="StockrLogo" src={require("../../components/Header/stockrlogo.png")}/>
            <i id="homeIcon" className="fas fa-home"/>
            <p className="todaysDate">{moment().format("MMMM-DD-YYYY")}</p>
            <div className="icons" >
                <a href="#/"><i class="fas fa-inbox"></i></a>
                <a href="#/"><i className="fas fa-cog" /></a>
                <a href="#/"><i className="fas fa-file-invoice-dollar" /></a>
                <a href="#/" onClick={this.openScreenSaver}><i class="fas fa-cloud-moon"></i></a>
              </div>
          </div>
            <div className="greetingLogout">
            <p className="Greeting">Welcome to your dashboard {this.state.first_name}</p>
            <a href="/"><p className="Logout"  onClick={this.Logout}>Logout</p></a>
            </div>
        </div>
               <div id="myNav" class="overlay">
             <a href="#/" class="closebtn" onClick={this.closeScreenSaver}>&times;</a>
               <div class="overlay-content">
               <Countdown />
               </div>
           </div>
      </div>
    ) 
  }
}

