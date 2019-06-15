import React from 'react';
import './PromoCode.css';
import {
    Button,
    Collapse,
    Form,
    Row,
    Col,
    FormGroup,
    label,
    FormControl
} from 'react-bootstrap'

export default class PromoCode extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false,
        };
    }

    handleChange = e => {
        this.props.handleChange(e);
    };

    render() {
        return (
            <div>
                <Button
                    className="promo-code-button"
                    variant="link"
                    onClick={() => this.setState({open: !this.state.open})}
            >
                {this.state.open === false ? `Apply ` : `Hide `}
                promo code
                {this.state.open === false ? ` +` : ` -`}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Row className="show-grid">
                            <Col md={6}>
                                <Form>
                                    <FormGroup controlId="formInlineName">
                                        <label>Promo Code</label>
                                        <FormControl
                                            type="text"
                                            placeholder="Enter promo code"
                                            value={this.props.promoCode}
                                            onChange={this.handleChange}
                                        />
                                    </FormGroup>
                                    <Button
                                        block
                                        variant="success"
                                        className="btn-round"
                                        disabled={this.props.isDisabled}
                                        onClick={this.props.giveDiscount}
                                        >
                                        Apply
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </div>
        )
    }
}
