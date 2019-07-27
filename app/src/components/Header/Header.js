import React, { Component } from 'react'
import moment from 'moment';
import "./Header.css";
import Countdown from '../Countdown/Countdown';
import AccountSettings from '../AccountSettings/AccountSettings';
import Billing from '../Billing/Billing';
import Username from '../Username/Username';
export default class Header extends Component {
      
      state = {
      first_name: ''
      }

      componentDidMount(){
        
        let data = JSON.parse(sessionStorage.getItem('STATE'));
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

      openAccountSettings(){
        document.getElementById("AccountSettings").style.width = "25%";
      }
  
      closeAccountSettings(){
        document.getElementById("AccountSettings").style.width = "0%";
      }

      Logout(){
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
                <a href="#/"><i className="fas fa-inbox"></i></a>
                <a href="#/" onClick={this.openAccountSettings}><i className="fas fa-cog" /></a>
                <a href="#/" onClick={this.openScreenSaver}><i className="fas fa-cloud-moon"></i></a>
              </div>
          </div>
            <div className="greetingLogout">
            <p className="Greeting">Welcome to your dashboard {this.state.first_name}</p>
            <Username />
            <a href="/"><p className="Logout"  onClick={this.Logout}>Logout</p></a>
            </div>
        </div>
               <div id="myNav" className="overlay">
                  <a href="#/" className="closebtn" onClick={this.closeScreenSaver}>&times;</a>
               <div className="overlay-content">
                <Countdown />
               </div>
              </div>
              <div id="AccountSettings" className="AccountSettings">
                  <a href="#/" className="closebtn" onClick={this.closeAccountSettings}>&times;</a>
               <div className="overlay-content">
                <AccountSettings />
               </div>
              </div>
      </div>
    ) 
  }
}

