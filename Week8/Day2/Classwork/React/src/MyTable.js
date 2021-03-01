import React from 'react';

const MyTable = function (props) {
  return (
    <React.Fragment>
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.last}</td>
          </tr>
    </React.Fragment>
  )
}

export default MyTable;