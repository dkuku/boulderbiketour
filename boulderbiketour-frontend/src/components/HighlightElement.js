import React, {Component} from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class HighlightElement extends Component {
    render() {
    const divStyle = {
        borderLeft: "8px solid "+ this.props.color
    };
    return (

        <div className="col-sm-6" >
        <a href={this.props.link}>
         <Card inverse className="my-2">
           <CardImg src={this.props.image} alt={this.props.title} />
        <CardImgOverlay className="d-flex flex-column justify-content-end">
            <div className="ml-1 p-2 bg-dark" style={divStyle} >
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>{this.props.subtitle}</CardText>
            </div>
        </CardImgOverlay>
        </Card>
        </a>
        </div>
    );
};
}

