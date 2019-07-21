import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

//components

import Splash from './components/Splash/Splash';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import Billing from './components/Billing/Billing';
import Reports from './components/Reports/Reports';
import AccountSettings from './components/AccountSettings/AccountSettings';
import Header from './components/Header/Header';

export default class App extends React.Component {

  render(){

    return (
        <div className="App" id="App">                    
            <Router>
              <div>         
                <Route path="/app" component={Header} />
                <Route path="/app/settings" component={ComponentB} />
                <Route path="/app/reports" component={ComponentB} />
                <Route path="/app/billing" component={ComponentB} />
                <Route path="/app/aboutus" component={ComponentB} />
                <Route path="/app/home" component={ComponentB} />
                <Route path="/" exact component={Splash} />
                <Route path="/login" exact component={Landing} />                            
                <Route path="/app/home" exact component={Dashboard} />
                <Route path="/app/reports" exact component={Reports} />
                <Route path="/app/billing" exact component={Billing} />
                <Route path="/app/settings" exact component={AccountSettings} />
                <Route path="/app/aboutus" exact component={AboutUs} />
              </div>
            </Router>   
        </div>
    );
  
  }
  
}

class ComponentB extends React.Component {
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
      <div className="lightSettings">
      <i class="fas fa-moon" id="darkMode" onClick={this.darkMode} ></i>
      <i class="far fa-moon" id="lightMode" onClick={this.lightMode}></i>
      </div>
    </div>
  )
}
}

