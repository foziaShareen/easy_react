import react from 'react';
import ReactDOM from 'react-dom';
import Child from './child'
 function Parent(){
     function AnotherParent(data)
     {
         
         
             document.write(data)
         
     }
     
     return(
         <div>
             <h1>parent component</h1>
              <Child alert={AnotherParent} />                                                        
         </div>
     )
 }
 export default Parent