
import Student  from './salary'
import React ,{useState} from 'react'

function App() {
  
const[status,setStatus]=useState(true)
  return (
    <div >
      {
        status?<h1>welcome</h1>:null
      }
      

<button onClick={()=>setStatus(false)}>Hide</button> 
<button onClick={()=>setStatus(true)}>Show</button> 
       </div>
  )
}

export default App;