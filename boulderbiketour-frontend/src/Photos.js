
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {Row} from 'reactstrap';
import axios from 'axios';
import queryString from 'query-string';

import Image from './components/Image';

export default class Photos extends Component {
    constructor(props) {
        super(props)
        this.flickrURL = this.flickrURL.bind(this)
        this.getImages = this.getImages.bind(this)
            this.state = {
                images: [],
                hasMoreItems: true,
                loadMore: true,
                page: 1
            }
    }

    flickrURL(page) {
        const address = "https://api.flickr.com/services/rest/?"
        return address + queryString.stringify({
            page: page,
            method: "flickr.photos.search",
            tags: "bikerace,boulderbiketour",
            api_key: 'ca3783111609d69139840916b7a01ad2',
            format: 'json',
            nojsoncallback: 1,
            per_page: 6
        })
    }

    imageURL(item) {
        return 'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'
    }

    getImages(page) {
        axios.get(this.flickrURL(page))
            .then(response => {
                    var images = this.state.images
                    response.data.photos.photo.map((image) => {
                    images.push(image)
                    })
            this.setState({images: images})
            this.setState((prevState, props) => ({
                page: prevState.page + 1
            })); 
            })
        .catch(error => console.log(error))
    }


render(){
    const loader = <div className="loader">Loading ...</div>;
    var items = [];
    this.state.images.map( (data, i) => {
        items.push(
        <Image url={this.imageURL(data)} key={i} />
        )
    })

    return (
            <Row className="photoGrid">
            <InfiniteScroll
            pageStart={0}
            initialLoad={true}
            loadMore={this.getImages}
            hasMore={this.state.hasMoreItems}
            loader={loader}>
            {items}
            </InfiniteScroll>
            </Row>
           )
}
}
