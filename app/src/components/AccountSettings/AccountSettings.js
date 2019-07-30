import React, { Component } from 'react';
import Darkmode from '../Darkmode/Darkmode';
import './AccountSettings.css';
export default class AccountSettings extends Component {

    render() {
        return (
            <div>
                <h1>Account Settings</h1>
                <hr className="AShr"></hr>
                <p>Education Mode</p>
                <hr className="AShr"></hr>
                <Darkmode />
                <hr className="AShr"></hr>

                <h1>Billing</h1>
            </div>
        )
    }
}
