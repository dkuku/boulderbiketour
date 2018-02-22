import React, { Component } from 'react';
import Countdown from './components/Countdown';
import Sponsors from './components/Sponsors';
import Highlights from './components/Highlights';
import NewsletterForm from './components/NewsletterForm';

export default class Home extends Component {
    render(){
        return(
        <div>
            <div className="align-items-center d-flex photo-overlay py-5 cover" style={{backgroundImage: "url(./home.jpg)"}} >
                <div className="container">
                    <div className="row">
                        <div className="text-light col-lg-7 align-self-center text-lg-left text-center">
                            <h1 className="mb-0 mt-4 display-3">BoulderBikeTour</h1>
                            <h3 className="mb-0 mt-4">Rocky Mountains, Colorado</h3>
                            <p className="mb-5 lead">First April 2020</p>
                            <NewsletterForm />
                        </div>
                        <div className="text-light col-lg-5 p-3">
                            <p>starts in:</p> 
                            <Countdown />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-4" >
                <h2 className="text-info">Highlights</h2>
               <Highlights /> 
            </div>
            <div className="container-fluid bg-light text-dark p-4 sponsors" >
                <h2 className="text-info">Sponsors</h2>
                <Sponsors />
            </div>
        </div>
        )

    }
}
