
import Student  from './salary'
import React ,{useState} from 'react'

function App() {
   const[Data,setData]=useState("shareen");
    

 return(
   <div>
    <h1>{Data}</h1>
    <button onClick={()=>setData("fozia")}>click</button>
   </div>
 )
 }
export default App;