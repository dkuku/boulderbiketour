import React, {Component} from 'react';
import HighlightElement from './HighlightElement';
import {CardDeck} from 'reactstrap';

export default class Highlights extends Component {

    render() {
        const highlights = [{
            title: "How to enter",
            subtitle: "Everything you need to know about race entry",
            link: "#",
            color: "blue",
            image: "enter.jpg"},
            {
                title: "Event Info",
                subtitle: "Essential information for riders and spectractors",
                color: "green",
                link: "#",
                image: "info.jpg"},
            {
                title: "Latest news",
                subtitle: "Keep up to date with all the latest on Boulder Bike Tour",
                color: "yellow",
                link: "#",
                image: "news.jpg"},
            {
                title: "FAQs",
                subtitle: "Answers to all the questions you may have",
                color: "purple",
                link: "#",
                image: "faq.jpg"},
            {
                title: "Charity",
                subtitle: "Find out more about riding and fundraising",
                color: "white",
                link: "#",
                image: "charity.jpg"},
            {
                title: "Training",
                subtitle: "Training plans and advice, injury prevention, sports nutrition and gear",
                color: "orange",
                link: "#",
                image: "training.jpg"},]
        return (
            <CardDeck className="row">
                {highlights.map((element, index) => {
                    return (
                        <HighlightElement key={index} index={index} {...element} />
                    )}
                )}
            </CardDeck>
        );
    }
}
