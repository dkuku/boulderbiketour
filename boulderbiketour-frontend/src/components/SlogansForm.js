import React from 'react';
import axios from 'axios';
import { Container, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class SlogansForm extends React.Component {
  state = {first: '', last: '', email: '', slogan: '', modal: false};

  handleChange = (e: Object) => this.setState({ [e.target.name]: e.target.value });

  redirectHome = (e) => {
     e.preventDefault();
      window.location = '/'
 }

  handleSubmit = () => {
    const { first, last, email, slogan } = this.state
    this.action = window.open(this.addNewSlogan(first, last, email, slogan));
  }

  addNewSlogan = ()  => {
    axios.post("http://212.8.251.135:3001/api/v1/slogans", {slogan: {first: this.state.first,last: this.state.last, email: this.state.email, slogan: this.state.slogan}})
      .then(response => {
        console.log(this.state)
        this.setState( response.data.slogan );
        this.setState({modal: true})

      })
      .catch(error => console.log(error))

  }

  render() {
    const {first, last, email, slogan } = this.state;
    return (
      <Container>
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

      <Modal isOpen={this.state.modal}>
      <ModalHeader toggle={this.toggle}>Slogan saved to database</ModalHeader>
      <ModalBody>
      Hi {this.state.first} {this.state.last}. Your slogan " {this.state.slogan} " was saved to the database. We let you know about the contest to your email address {this.state.email}
      </ModalBody>
      <ModalFooter>
      <Button color="primary" onClick={this.redirectHome} to='/' >Go Home</Button>{' '}
      </ModalFooter>
      </Modal>
      </Container>
    );
  }
}
