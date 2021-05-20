import React,{Component} from 'react';
import ReactDOM from 'react-dom';
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
const element=<HitTarget />
ReactDOM.render(element,document.getElementById('root'))