import React, { Component } from "react";
import { Route } from 'react-router-dom';
import LandingPage from '../src/Components/LandingPage';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' render={props => (
          <LandingPage /> 
        )}/>
      </div>
    )
  }
}

export default App;
