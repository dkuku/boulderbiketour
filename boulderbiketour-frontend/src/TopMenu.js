
import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
const instaAddress = "https://api.instagram.com/oauth/authorize/?client_id=ea86d2a774bc4c979110dbf1c016e44e&redirect_uri=http://127.0.0.1:3000/Photos&response_type=token"

export default class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return(
      <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">Bike Boulder Tour</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="ml-auto" navbar>
      <NavItem>
      <NavLink href={instaAddress}>Photos</NavLink>
      </NavItem>
      <NavItem>
      <NavLink href="/Location">Location</NavLink>
      </NavItem>
      <NavItem>
      <NavLink href="/Riders">Riders</NavLink>
      </NavItem>
      <NavItem>
      <NavLink href="/Contest">Contest</NavLink>
      </NavItem>
      </Nav>
      </Collapse>
      </Navbar>
    ) 
  }
}
