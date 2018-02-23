import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import RidersContainer from './components/RidersContainer';

export default class Riders extends Component {
    render(){
        return(
            <div>
                <Container fluid>
                <Row>
                    <Col className="col-12 col-lg-5 order-2 order-lg-12 p-2">
                        <Card className="m-2">
                            <CardImg top width="100%" src="road racers.jpg" alt="Riders" />
            </Card>

            </Col>
            <Col className="col-12 col-lg-7 order-3">
                <RidersContainer />
            </Col>
            </Row>
            </Container>
            </div>
        ) 
    }

}
