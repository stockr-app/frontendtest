import React, { Component } from "react";
import {StripeProvider, Elements} from 'react-stripe-elements';
import { Button, Collapse, } from 'react-bootstrap';
import './Billing.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
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
                   <div className="premiumPane">
                   <h1>Stockr Premium</h1>
                   <h3>$9.99 / Month</h3>
                   <p>or $99.99 / Year</p>
                   <h4>Unlimited Stock Tracking</h4>
                   <p id="premiumInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut gravida, erat at semper semper, elit dui accumsan purus, 
                nec tristique neque est ac odio. Proin sodales, orci non 
                condimentum aliquam, erat lacus sollicitudin arcu, vel auctor 
                ex justo sit amet neque. Etiam at cursus lacus, vel laoreet 
                leo. Aenean efficitur nulla in ante vulputate, et pretium ex 
                maximus. Praesent condimentum metus id cursus interdum. In 
                hac habitasse platea dictumst.</p>
                   </div>              
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
                    <div>                      
                        <input placeholder="Name on Card"></input>
                        <input placeholder="Card Number"></input>
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
