
import Student  from './salary'
import React ,{useEffect,useState} from 'react'

function App() {
   
  const[count,setCount]=useState(0)  
   useEffect(() => {
    console.warn("use effect")
   })
      
     

 return(
   <div>
  <h1>useEffect in React</h1>
  <h1>Count= {count}</h1>
  <button onClick={()=>setCount(count+1)}>update</button> 
   </div>
 )
 }
export default App;