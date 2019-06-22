import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  return (
    <nav>
      <div className="NavLinks">
        <i className="fas fa-home" />
        <Link to={"/app/home"}>DashBoard</Link>
      </div>
      <div className="NavLinks">
        <i class="fas fa-chart-line" />
        <Link to={"/app/reports"}>Reports</Link>
      </div>
      <div className="NavLinks">
        <i class="fas fa-bullseye" />
        <Link to={"/app/targets"}>Targets</Link>
      </div>
      <div className="NavLinks">
        <i class="fas fa-key" />
        <Link to={"/app/keyindicators"}>Key Indicators</Link>
      </div>
      <div className="NavLinks">
        <i class="fas fa-address-card" />
        <Link to={"/app/aboutus"}>About Us</Link>
      </div>
      <div className="NavLinks">
        <i class="fas fa-wallet" />
        <Link to={"/app/billing"}>Billing</Link>
      </div>
      <div className="NavLinks">
        <i class="fas fa-cogs" />
        <Link to={"/app/settings"}>Settings</Link>
      </div>
    </nav>
  );
};

export default NavBar;
