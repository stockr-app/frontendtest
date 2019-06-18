import React, { Component } from 'react'
import { Link } from "react-router-dom";
import KeyIndicators from '../KeyIndicators/KeyIndicators';
import Targets from '../Targets/Targets';
import Billing from '../Billing/Billing';
import AccountSettings from '../AccountSettings/AccountSettings';
import Reports from '../Reports/Reports';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className="vertical-menu">
            <Link id="Link" to="/">Home</Link>
            <Link id="Link" to="/reports">Reports</Link>
            <Link id="Link" to="/targets">Targets</Link>
            <Link id="Link" to="/keyIndicators">Key Indicators</Link>
            <Link id="Link" to="/settings">Account Settings</Link>
            <Link id="Link" to="/billing">Billing</Link>
          </div>
        )
    }
}
