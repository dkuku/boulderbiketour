import  React, {Component} from 'react';
import Image from './Image';

export default class ImageCarousel extends Component {
    render(){
        return(
            <div>

                {this.props.data.map( (carousel, index) => {
                    return (
                        <Image data={carousel} key={ index} />
                    )
                }
                ) }
            </div>
        )
        }
        }

