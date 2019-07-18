import React, { Component } from 'react'

export default class Darkmode extends Component {

    darkMode(){
        document.getElementById().style.backgroundColor="black";
        console.log('Dark mode activated')
    }
    lightMode(){
      document.getElementById().style.backgroundColor="white";
      console.log('Light mode activated')
    }

    render() {
        
        return (
            <div>
                <button id="darkMode" onClick={this.darkMode}>Dark</button>
                <button id="lightMode" onClick={this.lightMode}>Light</button>
            </div>
        )
    }
}
