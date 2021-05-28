
import React, { Table } from 'react-bootstrap';
import User from './User';

export default function App() {
  const students = [
    {
      name: "sohail",
      email: "s@gmail/com",
      contact: 82937,

    },
    {
      name: "rameen",
      email: "s@gmail/com",
      contact: 82937,

    },


  ]

  return (
    <Table variant="dark" >
      <tbody>


        <div>

          <tr>
            <td>
            {students.map((data) =>


              <User item={data} />
            )}
            </td>

          </tr>
        </div>
      </tbody>
       </Table >)
       


}