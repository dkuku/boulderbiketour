import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <div class="text-center">
                <Container>  
                    <Row>
                        <Col md="4" className="p-4">
                            <h2 className="mb-4">Contact</h2>
                            <p className="m-0">
                                <a href="tel:55555555">+55 - 555 555 555</a>
                            </p>
                            <p>
                                <a href="mailto:info@boulderbiketour.com">info@boulderbiketour.com</a>
                            </p>
                        </Col>
                        <Col md="4" className="p-4">
                            <h2 className="mb-4">Location</h2>
                            <p>
                                <NavLink href="/Location" target="_blank">Boulder Colorado
                                    <br/>Rocky Mountains
                                </NavLink>
                            </p>
                        </Col>
                        <Col md="4" className="p-4">
                            <h2 className="mb-4">Starts</h2>
                            <p>10:00 on the 1st july 2020</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="mt-3">
                            <p className="text-center text-muted">© Copyright 2018 Daniel Kukula - All rights reserved. </p>
                        </Col>
                    </Row>
                </Container>
            </div>  
        )
    }
}
