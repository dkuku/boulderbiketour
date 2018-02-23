import React, {Component} from 'react';
import {Modal, ModalBody, Button, Form, FormGroup, Input } from 'reactstrap';

export default class NewsletterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailModal: false
        };

    this.toggle = this.toggle.bind(this);
    this.toggleOn = this.toggleOn.bind(this);

    }
    toggle() {
        this.setState({
            emailModal: !this.state.emailModal
        });
    }

    toggleOn(e) {
        e.preventDefault()
        this.setState({
            emailModal: !this.state.emailModal
        });
        }

    render() {
        return(
            <div>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="email" name="email" placeholder="Email Address" />
            <Button color="warning" onClick={this.toggleOn}>Request Info</Button>
            </FormGroup>
            </Form>
            <Modal isOpen={this.state.emailModal} toggle={this.toggle} className={this.props.className}>
                <ModalBody className="text-dark">
                    <p>Your email was successfully added, This is just a placeholder and currently doesn't work</p>
            <Button color="secondary" onClick={this.toggle}>OK</Button>
            </ModalBody>
            </Modal>
            </div>
        )
    }
}
