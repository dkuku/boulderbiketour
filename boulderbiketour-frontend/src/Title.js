import React, { Component } from 'react';

export default class Title extends Component {

    render() {
        const page = this.props.location.pathname.split('/')[1].toUpperCase();
        return (
            <div>
                {/* Dont show header on main page */}
                {page.length > 0 &&
                        <h2 className="display-4 my-2">{page}</h2>
                }
            </div>
        )
    }
}
