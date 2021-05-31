
import { render } from '@testing-library/react';
import React, {createRef } from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  constructor(props){
    super();
this.inputRef=createRef()
  }
  componentDidMount(){
    console.warn(this.inputRef.current.value="678")
    
  }
  getValue()
  {
    console.warn(this.inputRef.current.style.color="red")

    console.warn(this.inputRef.current.style.color="red")
    console.warn(this.inputRef.current.style.backgroundColor="pink")

  }
  render(){
    return(
      <>

              <input type="text" ref={this.inputRef}/>
              <button onClick={()=>this.getValue()}>click</button>

      </>
      
    )
  }
}
export default App
  

  