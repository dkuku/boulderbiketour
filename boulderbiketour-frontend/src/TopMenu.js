import React, { Component } from 'react';
import {
    Collapse,
        Navbar,
        NavbarToggler,
        Nav,
        NavItem,
        NavLink,
        Container
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
            <Navbar className="bg-dark navbar-dark" dark expand="md">
            <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse className="text-center justify-content-center" isOpen={this.state.isOpen} navbar>
            <Nav navbar>
            <NavItem>
            <NavLink href="/">BoulderBikeTour</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href='/Photos'}>Photos</NavLink>
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
    </Container>
    </Navbar>
    )
    }
}
