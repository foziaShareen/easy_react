
import React from 'react';
function Child(props){
    const data="F@gmail.com"
    return(
        <div>
            <h1>{props.data}</h1>
            <button onClick={()=>props.alert(data)}>Click Me</button>

        </div>
    )
}
export default Child