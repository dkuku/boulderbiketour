
import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import Image from './components/Image';



export default class Photos extends Component {
    constructor(props) {
        super(props)
            this.state = {
                data: []
            }
    }

    flickrURL(page=1){
        const address= "https://api.flickr.com/services/rest/?"
        return address + queryString.stringify({
            page: page,
            method: "flickr.photos.search",
            tags: "bikerace,boulderbiketour",
            api_key: 'ca3783111609d69139840916b7a01ad2',
            format: 'json',
            nojsoncallback: 1,
            per_page: 5
        })
    }

    imageURL(item) {
        return 'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'
    }

    componentDidMount() {
        axios.get(this.flickrURL())
            .then(response => {
                    this.setState({data: response.data.photos.photo});
                    })
        .catch(error => console.log(error))
    }


render(){
    return (
            <div>
            { this.state.data.map( (data) => {
                    console.log(this.imageURL(data))
                    return (
                            <Image url={this.imageURL(data)} key={data.id} />
                           )}
                    )}
            </div>
           )
}
}
