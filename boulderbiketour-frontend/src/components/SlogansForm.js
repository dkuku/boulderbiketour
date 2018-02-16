import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SlogansForm extends React.Component {
  state = {first: '', last: '', email: '', slogan: ''};

    handleChange = (e: Object) => this.setState({ [e.target.name]: e.target.value });


  handleSubmit = () => {
    const { first, last, email, slogan } = this.state
    this.action = window.open(this.addNewSlogan(first, last, email, slogan));
  }

  addNewSlogan = ()  => {
    axios.post("http://localhost:3001/api/v1/slogans", {slogan: {first: this.state.first,last: this.state.last, email: this.state.email, slogan: this.state.slogan}})
      .then(response => {
        this.setState({slogan: response.data.slogan})
        console.log(this.state.slogan)
      })
      .catch(error => console.log(error))

  }

  render() {
    const {first, last, email, slogan } = this.state;
    return (
      <Form>
      <FormGroup>
      <Label for="first">First Name</Label>
      <Input type="" name="first" id="first" placeholder="Jon" value={first} onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
      <Label for="last">Email</Label>
      <Input type="" name="last" id="last" placeholder="Snow"     value={last} onChange={this.handleChange}/>
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
    );
  }
}
