import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

//components
import Splash from './components/Splash/Splash';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import AboutUs from './components/AboutUs/AboutUs';
import Targets from './components/Targets/Targets';
import Billing from './components/Billing/Billing';
import AccountSettings from './components/AccountSettings/AccountSettings';
import Reports from './components/Reports/Reports';
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div>
        <Route path="/" exact component={Splash} />
        <Route path="/login" exact component={Landing} />
        <Route path="/home" exact component={Dashboard} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/targets" exact component={Targets} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/billing" exact component={Billing} />
        <Route path="/settings" exact component={AccountSettings} />
      </div>
    </Router>
    </div>
  );
}

export default App;
