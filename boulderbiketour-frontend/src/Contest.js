import React from 'react';
import { Container, Row, Col, Card, CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';
import SlogansForm from './components/SlogansForm'

export default class Contest extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <SlogansForm />
            </Col>
            <Col>
                <Card>
                    <CardImg top width="100%" src="contest.jpg" alt="Contest" />
            <CardBody>
                <CardTitle>Contest</CardTitle>
            <CardText>Sometimes your body must rest. Train your brain and send us a nice slogan for our Race.<br/>
            50 letters maximum.
            </CardText>
            </CardBody>
            </Card>
            </Col>
            </Row>
            </Container>
        );
    }
}
