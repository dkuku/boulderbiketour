import React, {Component} from 'react'
import axios from 'axios' 
import {Table} from 'reactstrap'

export default class SloganConfirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slogan:[]
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/v1/slogans.json")
      .then(response => {
        this.setState({slogan: response.data.slogan})
        console.log(this.state.slogan)
      })
      .catch(error => console.log(error))
  } 

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Frist Name</th>
            <th>Last Name</th>
            <th>Slogan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>#</th>
            <th>{this.state.slogan.first}</th>
            <th>{this.state.slogan.last}</th>
            <th>{this.state.slogan.slogan}</th>
          </tr>
       </tbody>
      </Table>
    )
  }
}
