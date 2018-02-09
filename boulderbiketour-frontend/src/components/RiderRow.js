import React from 'react'

const RiderRow = ({rider}) =>
  <tr>
    <th scope="row">{rider.id}</th>
    <td>{rider.first}</td>
    <td>{rider.last}</td>
    <td>{rider.city}</td>
    <td>{rider.state}</td>
  </tr>

export default RiderRow
