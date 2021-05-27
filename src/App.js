import Student from './salary'
import React, { Table } from 'react-bootstrap';

export default function App() {
  const students = [
    {
      name: "sohail",
      email: "s@gmail/com",
      contact: 82937,
      address:[
        {
          hno:"2",
          city:"wah"
        }
      ]
    }

    
  ]

  return (
    <div>

      <h1>STUDENTS</h1>
      <Table variant="dark" striped>
<tbody>
        <tr>
          <td>Name</td>
          <td>E-mail</td>
          <td>contact</td>
          <td>Address</td>
        </tr>
        

        {
          students.map((data) =>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
              <td>{data.address.map((item)=>
              <tr>
                <td>{item.hno}</td>
                <td>{item.city}</td>
              </tr>
              )}</td>
            </tr>
          )
        }
        </tbody>
            </Table>

      
        
     </div>
    )
}
