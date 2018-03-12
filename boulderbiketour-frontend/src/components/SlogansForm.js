import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SlogansForm extends React.Component {
    state = {first: '', last: '', email: '', slogan: '', modal: false, modalData: '', modalHeader: '', modalRedirect: '/'};

    handleChange = (e: Object) => this.setState({ [e.target.name]: e.target.value });

    redirectHome = (e) => {
        e.preventDefault();
        window.location = this.state.modalRedirect
    }

    handleSubmit = () => {
        const { first, last, email, slogan } = this.state
            this.action = window.open(this.addNewSlogan(first, last, email, slogan));
    }

    addNewSlogan = ()  => {
        const { first, last, email, slogan } = this.state
        axios.post("http://212.8.251.135:3001/api/v1/slogans", {slogan: {first: first,last: last, email: email, slogan: slogan}})
            .then(response => {
                    if (response.status === 200){
                    this.setState({modalHeader: `Your slogan was submitted`});}
                    this.setState({modalData: `Hi ${first} ${last}. Your slogan " ${slogan} " was saved to the database. We let you know about the contest to your email address ${email}`});
                    this.setState({modalRedirect: '/'})
                    this.setState({modal: true})
                    })
    .catch(error => {
                    this.setState({modalHeader: `Error`});
                    this.setState({modalData: "Error. Please try again"});
                    this.setState({modalRedirect: "/Contest"})
                    this.setState({modal: true})
                    console.log(error)
                    }
    )}

    render() {
        const {first, last, email, slogan } = this.state;
        return (
                <div>
                <Form>
                <FormGroup>
                <Label for="first">First Name</Label>
                <Input type="" name="first" id="first" placeholder="Jon" value={first} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                <Label for="last">Email</Label>
                <Input type="" name="last" id="last" placeholder="Snow" value={last} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" name="email" id="Email" placeholder="email@server.com" value={email} onChange={this.handleChange} />
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
            <Button color="primary" onClick={this.redirectHome} >OK</Button>{' '}
        </ModalFooter>
            </Modal>
            </div>
            );
    }
}
