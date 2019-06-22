import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

//components
import Splash from "./components/Splash/Splash";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import KeyIndicators from "./components/KeyIndicators/KeyIndicators";
import Targets from "./components/Targets/Targets";
import Billing from "./components/Billing/Billing";
import AccountSettings from "./components/AccountSettings/AccountSettings";
import Reports from "./components/Reports/Reports";
import NavBar from "./components/NavBar/NavBar.js";
import AboutUs from "./components/AboutUs/AboutUs.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={Splash} />
          <Route path="/app" component={NavBar} />
          <Route path="/login" exact component={Landing} />
          <Route path="/app/home" exact component={Dashboard} />
          <Route path="/app/reports" exact component={Reports} />
          <Route path="/app/targets" exact component={Targets} />
          <Route path="/app/keyindicators" exact component={KeyIndicators} />
          <Route path="/app/billing" exact component={Billing} />
          <Route path="/app/settings" exact component={AccountSettings} />
          <Route path="/app/aboutus" exact component={AboutUs} />
        </div>
      </Router>
    </div>
  );
}

export default App;
