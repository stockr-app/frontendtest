import React, { Component } from 'react'

export default class Darkmode extends Component {

    darkMode(){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        console.log('Dark mode activated')
    }
    lightMode(){
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      console.log('Light mode activated')
    }
    
    render(){
      return(
        <div className="quickSettings">
          <div>
              <button id="darkMode" onClick={this.darkMode}>Dark Mode</button>
              <button id="lightMode" onClick={this.lightMode}>Light Mode</button>
          </div>
        </div>
      )
    }
}
