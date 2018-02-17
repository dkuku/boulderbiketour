
import React, { Component } from 'react';
import axios from 'axios';
import Image from './components/Image';
const queryString = require('query-string');
const parsedHash = queryString.parse(window.location.hash);

export default class Photos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=".concat(parsedHash.access_token))
      .then(response => {
        this.setState({data: response.data.data});
      })
      .catch(error => console.log(error))
  }


  render(){
    return (
    <div>
    {this.state.data.map( (data) => {
       return (
          <Image data={data} key={data.id} />
    )}
  )}

    </div>
    )
  }
}
