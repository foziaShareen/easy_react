import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function StudentInfo(student){
  return(
<div className="styleclass">
  <p>
    <label>

      student Roll_No:{student.Roll_No}
      
    </label>
  </p>
  <p>
    <label>

      student Roll_No:{student.Name}
      
    </label>
  </p>
  <p>
    <label>

      student Roll_No:{student.Class}
      
    </label>
  </p>
</div>)
}
const element =<StudentInfo Roll_No="1" Name="Mansoor" Class="final"/>
 

ReactDOM.render(element,document.getElementById('root'))

