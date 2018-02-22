import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>Started already</span>;
const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        var months = Math.floor(days/30);
        days = days % 30;
        return <span>{months} months {days} days {hours} hours and {minutes} minutes</span>;
    }
};

export default class Home extends Component {
    render(){
        return(
            <Countdown date={new Date('2020-04-01T10:00:00')}
                renderer={renderer} />

        )
    }
}    
