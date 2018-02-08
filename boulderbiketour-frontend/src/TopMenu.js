
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
      <Navbar color="faded" light toggleable>
      <NavbarToggler right onClick={this.toggle} />
      <NavbarBrand href="/">Bike Boulder Tour</NavbarBrand>
      <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="ml-auto" navbar>
      <NavItem>
      <NavLink href="/Photos">Photos</NavLink>
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
