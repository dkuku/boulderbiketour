import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SlogansForm extends React.Component {
    state = {first: '', last: '', email: '', slogan: '', modal: false, modalData: '', modalHeader: '', modalButton: ""};

    handleChange = (e: Object) => this.setState({ [e.target.name]: e.target.value });

    redirectHome = (e) => {
        e.preventDefault();
        window.location = "/"
    }
    hideModal = (e) => {
        this.setState({modal: false})
    }

    handleSubmit = () => {
        const { first, last, email, slogan } = this.state
            this.action = window.open(this.addNewSlogan(first, last, email, slogan));
    }

    addNewSlogan = ()  => {
        const { first, last, email, slogan } = this.state
        axios.post("https://boulderbiketour.herokuapp.com/api/v1/slogans", {slogan: {first: first,last: last, email: email, slogan: slogan}})
            .then(response => {
                    if (response.status === 200){
                    this.setState({modalHeader: `Your slogan was submitted`});}
                    this.setState({modalData: `Hi ${first} ${last}. Your slogan " ${slogan} " was saved to the database. We let you know about the contest to your email address ${email}`});
                    this.setState({modalButton: this.redirectHome})
                    this.setState({modal: true})
                    })
    .catch(error => {
                    this.setState({modalHeader: `Error`});
                    this.setState({modalData: error.response.data[0] || "There was an error submitting the form, please try again in 5 minutes"});
                    this.setState({modalButton: this.hideModal})
                    this.setState({modal: true})
                    console.log(error.response.data)
                    }
    )}

    render() {
        const {first, last, email, slogan } = this.state;
        return (
                <div>
                <Form>
                <FormGroup>
                <Label for="first">First Name</Label>
                <Input type="" name="first" placeholder="Jon" id="first" value={first} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                <Label for="last">Last Name</Label>
                <Input type="" name="last" placeholder="Snow" id="last" value={last} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="email@server.com" value={email} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                <Label for="slogan">Enter your slogan</Label>
                <Input type="textarea" name="slogan" id="slogan" value={slogan} onChange={this.handleChange} />
                </FormGroup>
                <Button onClick={this.addNewSlogan}>Submit</Button>
                </Form>

                <Modal className = "text-dark" isOpen={this.state.modal}>
                <ModalHeader toggle={this.toggle}>{this.state.modalHeader}</ModalHeader>
                <ModalBody>
                {this.state.modalData}
        </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.state.modalButton} >OK</Button>{' '}
        </ModalFooter>
            </Modal>
            </div>
            );
    }
}
