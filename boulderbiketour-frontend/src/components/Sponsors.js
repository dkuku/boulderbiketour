import React from 'react';
import {CardDeck, Card, CardImg} from 'reactstrap'
export default class Sponsors extends React.Component {

    render() {
        const ImportAll = (r) => {
            let images = [];
            r.keys().map((item, index) => { images.push(r(item)); return images });
            return images;
}
const images = ImportAll(require.context('../../public/technologies', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="centered">
            {images.map( (image, index) => {
                    return (
                        <img className="tech" src={image} alt="" key={index}/>
                    )
                })}
            </div>
        );
    }
}
