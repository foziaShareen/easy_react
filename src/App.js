
import Student  from './salary'
import React ,{useState} from 'react'
import User from './User'

function App() {
    function getData(){
    return(
      
    alert("hello")
    
    )
    //why we make function and then call from child?
    // because may be we want to use in many children and it is convenient to define only 
    // once in parent and call from many child component as we want to be .
}
 return(
   <div>
    <User data={getData}/>
   </div>
 )
}
export default App;