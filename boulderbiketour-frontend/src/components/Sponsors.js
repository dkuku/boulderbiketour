import React from 'react';
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
                        <img className="tech pr-2" src={image} alt={image} key={index}/>
                    )
                })}
            </div>
        );
    }
}
