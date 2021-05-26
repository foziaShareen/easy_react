
import Student from './salary'
import React, { useEffect, useState } from 'react';

export default function App() {
  const students = [
    {
      name: "sohail",
      email: "s@gmail/com",
      contact: 82937
    },
    {
      name: "saira",
      email: "s@gmail/com",
      contact: 89734
    },
    {
      name: "susan",
      email: "s@gmail/com",
      contact: 2897
    }
  ]

  return (
    <div>

      <h1>STUDENTS</h1>
      <table border="1">

        <tr>
          <td>Name</td>
          <td>E-mail</td>
          <td>contact</td>
        </tr>

        {
          students.map((data) =>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          )
        }
            </table>

      
        
     </div>
    )
}













