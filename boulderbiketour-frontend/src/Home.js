
import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>Started already</span>;
const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{days} days {hours} hours and {minutes} minutes</span>;
    }
};


export default class Home extends Component {
    render(){
        return(
            <div class="align-items-center d-flex photo-overlay py-5 cover" style={{backgroundImage: "url(./home.jpg)"}} >
                <div class="container">
                    <div class="row">
                        <div class="text-light col-lg-7 align-self-center text-lg-left text-center">
                            <h1 class="mb-0 mt-4 display-3">BoulderBikeTour</h1>
            <p class="mb-5 lead">Rocky Mountains 2020</p>
            </div>
            <div class="text-light col-lg-5 p-3">
                <p>starts in:</p> 
                <Countdown date={new Date('2020-06-01T10:00:00')}
                    renderer={renderer} />
            </div>
            </div>
            </div>
            </div>
        ) 

    }
}
