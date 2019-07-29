import React, { Component } from 'react';
import Darkmode from '../Darkmode/Darkmode';
export default class AccountSettings extends Component {

    render() {
        return (
            <div>
                <h1>Account Settings</h1>
                <p>Education Mode</p>
                <Darkmode />
                <h1>Billing</h1>
            </div>
        )
    }
}
