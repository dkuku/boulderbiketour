import  React, {Component} from 'react';

export default class Image extends Component {
  render(){
    return(

      <img className="img-fluid p-3" src={this.props.data.images.standard_resolution.url} alt="" />

  )
}
}

