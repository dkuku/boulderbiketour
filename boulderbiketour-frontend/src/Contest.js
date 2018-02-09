import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contest extends React.Component {
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
        <Button>Submit</Button>
      </Form>
    );
  }
}
