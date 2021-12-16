import React from 'react'
import Card from './UI/Card'

const ListItem = (props) => {
    
    return (
      <Card>
        <table>
            <thead>
            <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
                {/* <th>Designation</th> */}
            </tr>
            </thead>
            <tbody>
            {props.employee.map((emp,index) => (
            <tr key={index}>
                <td>{emp.userId}</td>
                <td>{emp.id}</td>
                <td>{emp.title}</td>
                <td>{emp.completed?'true':'false'}</td>
                {/* <td>{emp.designation}</td> */}
            </tr>
          ))}
            </tbody>
        </table>
      </Card>
    );
}

export default ListItem
