import React, { Component } from "react";
import {StripeProvider, Elements} from 'react-stripe-elements';
import { Button, Collapse, } from 'react-bootstrap';
import './Billing.css';
import Header from '../Header/Header';
export default class Billing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    render(){


        return (
            <div>
               <Header />
                <h1>Billing</h1>
                <Button
                    className="payment-details-button"
                    variant="link"
                    onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === false ? `See` : `Hide` } Payment Details 
                    {this.state.open === false ? ` +` : ` -` }
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <h1>Billing Details</h1>
                        <input placeholder="Name on Card"></input>
                        <input placeholder="Card Number"></input>
                    </div>
                </Collapse>
            
                <h2>Current Subscription</h2>
                    <div class="uiCheckbox">
                        <div>
                        <input type="checkbox" name="example"/>
                        <label>Free User</label>
                        </div>
                        <div>
                        <input type="checkbox" name="example"/>
                        <label>1 Month Premium Subscription - $20</label>
                        </div>
                    </div>
                        <button class="ui button active">Buy Now</button>
            </div>
            
        )
    }
};
