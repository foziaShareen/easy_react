import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Employee extends Component{
    constructor(props){
        super(props);
      this.state={
          upDatedSalary:null
      } }
      getUpDatedSalary=(salary)=>{
          this.setState({upDatedSalary:salary})
      }

    
    render(){
        return(
            <div className="styleclass">
                <h1>Employee Details</h1>
                <label>Employee Name:<b>{this.props.EmployeeName}</b></label>
                <label>Employee Id:<b>{this.props.EmployeeId}</b></label>
                <label>Employee TotalSalary:<b>{this.props.EmployeeTotalSalary}</b></label>
                
          <Salary BasicSalary={this.props.BasicSalary} Hra={this.props.Hra} Allowance={this.props.Allowance}onSalaryChanged={this.getUpDatedSalary} />
            </div>
        )
    }
}
class Salary extends Component{
    constructor(props){
        super(props);
        this.state={
            hra:this.props.Hra,
            allowance:this.props.Allowance,
            basic:this.props.BasicSalary
        }
    }
    
upDatedSalary=()=>{
    let salary=parseInt(this.ref.basic.value)+parseInt(this.ref.hra.value)+parseInt(this.ref.allowance.value);
    this.props.onSalaryChanged(salary);}

    
    render(){
        return(
            <div className="styleclass">
                <h1>Salary Details</h1>
               <p> <label>Basic :<input type="text" ref="basic" defaultValue={this.state.basic}></input></label></p>
                <p><label>Hra:<input type="text" ref="hra" defaultValue={this.state.hra}></input></label></p>
                <p><label>Allowance:<input type="text" ref="allowance" defaultValue={this.state.allowance} ></input></label></p>
                <button onClick={this.upDatedSalary}>upDate</button>

            </div>
        )
    }
}
const element =<Employee EmployeeName="furqan" EmployeeId="12" EmployeeTotalSalary="12000"
BasicSalary="10000" Hra="3000" Allowance="3000" />
ReactDOM.render(element,document.getElementById('root'))