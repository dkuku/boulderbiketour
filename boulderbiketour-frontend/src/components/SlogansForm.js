import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SlogansForm extends React.Component {

  addNewSlogan = () => {
    axios.post("http://localhost:3001/api/v1/slogans", {slogan: {first: "111", last: "222", slogan: "333"}})
      .then(response => {
        this.setState({slogan: response.data.slogan})
        console.log(this.state.slogan)
    })
    .catch(error => console.log(error))

  }
  
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="first">First Name</Label>
          <Input type="" name="first" id="first" placeholder="Jon" />
        </FormGroup>
        <FormGroup>
          <Label for="last">Email</Label>
          <Input type="" name="last" id="last" placeholder="Snow" />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="Email" placeholder="email@em.il" />
        </FormGroup>
        <FormGroup>
          <Label for="slogan">Enter your slogan</Label>
          <Input type="textarea" name="slogan" id="slogan" />
        </FormGroup>
        <Button onClick={this.addNewSlogan}>Submit</Button>
      </Form>
    );
  }
}
