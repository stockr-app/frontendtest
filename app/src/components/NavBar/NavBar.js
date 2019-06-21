import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AboutUs from '../AboutUs/AboutUs';
import Targets from '../Targets/Targets';
import Billing from '../Billing/Billing';
import AccountSettings from '../AccountSettings/AccountSettings';
import Reports from '../Reports/Reports';
import './NavBar.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className="vertical-menu">
            <Link id="Link" to="/home"><i className="fas fa-home"></i>Home</Link>
            <Link id="Link" to="/reports"><i class="far fa-sticky-note"></i>Reports</Link>
            <Link id="Link" to="/targets"><i class="fas fa-crosshairs"></i>Targets</Link>
            <Link id="Link" to="/keyIndicators"><i class="fas fa-exclamation-triangle"></i>Key Indicators</Link>
            <Link id="Link" to="/settings"><i class="fas fa-cog"></i>Account Settings</Link>
            <Link id="Link" to="/billing"><i class="fas fa-file-invoice-dollar"></i>Billing</Link>
          </div>
        )
    }
}
