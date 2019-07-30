import React, { Component } from 'react'

export default class Premium extends Component {

    constructor(props, context) {
        super(props, context);
  
  this.handleShow = this.handleShow.bind(this);
  this.handleClose = this.handleClose.bind(this);
  };
  
    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    render() {
        return (
            <div>
                <p>Learn more about <a href="#/" onClick={this.handleShow}>Stockr Premium</a></p>

                <Modal show={this.state.show} onHide={this.handleClose} size="md">
          <div id="Modal">
            <Modal.Header closeButton>
              <Modal.Title>Get more with Stockr Premium!</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    <p id="modalContent">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ut gravida, erat at semper semper, elit dui accumsan purus, 
                        nec tristique neque est ac odio. Proin sodales, orci non 
                        condimentum aliquam, erat lacus sollicitudin arcu, vel auctor 
                        ex justo sit amet neque. Etiam at cursus lacus, vel laoreet 
                        leo. Aenean efficitur nulla in ante vulputate, et pretium ex 
                        maximus. Praesent condimentum metus id cursus interdum. In 
                        hac habitasse platea dictumst. Curabitur turpis neque, 
                        cursus feugiat auctor sit amet, faucibus convallis libero.             
                        </p>                        
                  </Modal.Body>
                    <Modal.Footer>
                            <StripeCheckout
                              token={onToken}
                              description="Stockr Premium Subscription"
                              panelLabel="Go Premium!"
                              image="https://i.ibb.co/nkd4hdr/Stockr-Logo-No-BG.png" 
                              amount = {999}
                              currency="USD"
                              stripeKey="pk_test_VIG6vu8A1lvY50QaClqZWLm200rGu6pZrL"
                              label="Go Premium: $9.99/mo"
                            />

                            <StripeCheckout
                              token={onToken}
                              description="Stockr Premium Subscription"
                              panelLabel="Go Premium!"
                              image="https://i.ibb.co/nkd4hdr/Stockr-Logo-No-BG.png"  
                              amount={9999}
                              currency="USD"
                              stripeKey="pk_test_VIG6vu8A1lvY50QaClqZWLm200rGu6pZrL"
                              label="Go Premium: $99.99/yr"
                            />                                    
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
              </div>
            </Modal>
            </div>
        )
    }
}
