import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

//components
import Splash from './components/Splash/Splash';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import KeyIndicators from './components/KeyIndicators/KeyIndicators';
import Targets from './components/Targets/Targets';
import Billing from './components/Billing/Billing';
import AccountSettings from './components/AccountSettings/AccountSettings';
import Reports from './components/Reports/Reports';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Route path="/" exact component={Splash} />
        <Route path="/login" exact component={Landing} />
        <Route path="/home" exact component={Dashboard} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/targets" exact component={Targets} />
        <Route path="/keyindicators" exact component={KeyIndicators} />
        <Route path="/billing" exact component={Billing} />
        <Route path="/settings" exact component={AccountSettings} />
      </div>
    </Router>
    </div>
  );
}

export default App;
