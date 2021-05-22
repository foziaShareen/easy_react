import React from 'react';
import ReactDOM from 'react-dom';
class Salaries extends React.Component{
    constructor(props){
        super(props);
        this.state={
salary:"120000",
counter:0
        }
    }
        upDate(){
        this.setState({
            salary:"140000",
            counter:this.state.counter+1
        })

    }
    render(){
        return(
            <div>
            <h1>{this.state.salary}</h1>,
            <h1>{this.state.counter}</h1>,

            <button onClick={()=>{this.upDate()}}>done</button>
            </div>
        )
    }
}
export default Salaries;