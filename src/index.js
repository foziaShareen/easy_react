import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Message extends Component{
    constructor(props){
        super(props);
        this.state={
            message:''
        }
    }
    onMessage(text){
        this.setState({message:"you have entered"+text.length+"number of characters"})
    }
    render(){
        return(
            <div>
            <h1>Welcome</h1>
        <label>Messasge:<input type="text" onChange={e=>this.onMessage(e.target.value)}/></label>
            <label >{this.state.message}</label>
            </div>

        )
    }
}
class HitTarget extends Component{
   state={ counter:0};
    hit=()=>{
        this.setState({counter:this.state.counter+1})
    }
    render(){
        return(
        
            <div>
                <button onClick={this.hit}>Hit</button>
                <label>you have hit the target {this.state.counter}times</label>
            </div>
        )
    }
}
const element=<Message/>
ReactDOM.render(element,document.getElementById('root'))