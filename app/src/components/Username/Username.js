import React, { Component } from 'react'
import './Username.css';

export default class Username extends Component {

    state = {
        user_id: ""
    }

    componentDidMount(){       
        let data = JSON.parse(sessionStorage.getItem('STATE'));
        this.setState({user_id: data.user_id});
      }

  if(){
      document.getElementById("Username").body.style.display = "none";
  } 
    

    render() {
        return (
            <div id="Username" className="Username">
                <p>To start your personal stock portfolio, you must create a unique username:</p>
                <input className="userInput" placeholder="Enter Username..."></input>
            </div>
        )
    }
}
