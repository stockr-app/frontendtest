import React, {Component} from 'react';
import {
  CardElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';

export default class _CardForm extends React.Component {
  render() {
    return (
      <form onSubmit={() => this.props.stripe.createToken().then(payload => console.log(payload))}>
        <CardElement />
        <button>Pay</button>
      </form>
    )
  }
}
const CardForm = injectStripe(_CardForm)

class Checkout extends React.Component {
  render() {
    return (
      <div className="Checkout">
        <h1>Available Elements</h1>
        <Elements>
          <CardForm />
        </Elements>
      </div>
    )
  }
}

const App = () => {
  return (
    <StripeProvider apiKey="pk_RXwtgk4Z5VR82S94vtwmam6P8qMXQ">
      <Checkout />
    </StripeProvider>
  )
}