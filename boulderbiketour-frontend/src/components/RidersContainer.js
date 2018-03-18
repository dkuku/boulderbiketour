import React, {Component} from 'react'
import axios from 'axios' 
import {Table, Container} from 'reactstrap'
import RiderRow from './RiderRow'

export default class RidersComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      riders: []
    }
  }

  componentDidMount() {
    axios.get("https://boulderbiketour.herokuapp.com/api/v1/riders")
      .then(response => {
        this.setState({riders: response.data.riders})
      })
      .catch(error => console.log(error))
  } 

  render() {
    return (
    <Container>
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
          <RiderRow rider={rider} key={rider.id} />
        )}
      )} 
       </tbody>
      </Table>
    </Container>
    )
  }
}
