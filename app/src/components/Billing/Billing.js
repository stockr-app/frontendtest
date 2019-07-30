import React, { Component } from "react";
import { Button, Collapse, } from 'react-bootstrap';
import './Billing.css';
import PromoCode from './PromoCode/PromoCode';

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

               <div className="billingContainer">             
               <div className="billingPane">
                   <h2>Choose Subscription</h2>
                   <div className="subscriptionBox">
                        <span className="subscriptionBoxes">
                        <input className="subscriptionCheckbox" type="checkbox" name="Monthly"/>
                        <h4>$9.99 Monthly</h4>
                        </span>
                        <span className="subscriptionBoxes">
                        <input className="subscriptionCheckbox" type="checkbox" name="Yearly"/>
                        <h4>$99.99 Yearly</h4>
                        </span>
                   </div>
                   <PromoCode />
                <Button
                    className="payment-details-button"
                    variant="link"
                    onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open === false ? `See` : `Hide` } Payment Details 
                    {this.state.open === false ? ` +` : ` -` }
                </Button>
                <h1>Billing Details</h1>
                <Collapse in={this.state.open}>
                    <div className="cardInfo">                      
                        <input className="cardInput" placeholder="Name on Card"></input>
                        <input className="cardInput" placeholder="Card Number"></input>
                        <input className="cardInput" placeholder="Address 1"></input>
                        <input className="cardInput" placeholder="Address 2 "></input>
                        <input className="cardInput" placeholder="City"></input>
                        <input className="cardInput" placeholder="State"></input>
                        <input className="cardInput" placeholder="Zip"></input>
                    </div>
                </Collapse>
                    <Button 
                    className="premiumButton"
                    variant="success"
                    class="btn-round"
                    >Buy Now
                    </Button>                    
                    </div>
            </div>
        </div>
        )
    }
};
