import React, {Component} from 'react'
import axios from 'axios' 
import {Table} from 'reactstrap'

export default class RidersComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      riders: []
    }
  }

  componentDidMount() {
   axios.get("http://localhost:3001/api/v1/riders.json")
    .then(response => {
      console.log(response.data)
      this.setState({riders: response.data})
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
          <th>City</th>
          <th>State</th>
        </tr>
        </thead>
        <tbody>
          
      {this.state.riders.map( (rider) => {
        return (
          <tr>
            <th scope="row">{rider.id}</th>
            <td>{rider.first}</td>
            <td>{rider.last}</td>
            <td>{rider.city}</td>
            <td>{rider.state}</td>
          </tr>
        )
      }
      )
      } 
        </tbody>
      </Table>
    )
  }
}
