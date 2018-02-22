import React, {Component} from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

export default class HighlightElement extends Component {
    render() {
    const divStyle = {
        borderLeft: "8px solid "+ this.props.color
    };
    return (
        <a href={this.props.link}>
            {console.log(this.props)}
         <Card inverse className="my-2">
           <CardImg width="100%" src={this.props.image} alt={this.props.title} />
        <CardImgOverlay className="d-flex flex-column justify-content-end">
            <div className="ml-2 p-2 bg-dark" style={divStyle} >
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>{this.props.subtitle}</CardText>
            </div>
        </CardImgOverlay>
        </Card>
        </a>
    );
};
}

