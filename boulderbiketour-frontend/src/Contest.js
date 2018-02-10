import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SlogansForm from './components/SlogansForm'
import SlogansConfirmation from './components/SlogansConfirmation'

export default class Contest extends React.Component {
  render() {
    return (
      <div>
      <h1> Contest </h1>
      <SlogansForm />
      <SlogansConfirmation />
      </div>
    );
  }
}
