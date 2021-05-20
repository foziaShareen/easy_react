       import React,{Component} from 'react';
       import ReactDOM from 'react-dom';
       import './index.css';
       class Programmers extends Component{
           render(){
               return(
                   <div className="styleclass">
                       <h2>Details of Programmers</h2>
                       <p>
                           <label>
                               Programmer Name:{this.props.Name}
                           </label>
                       </p>
                       <p>
                           <label>
                               Programmer Country:{this.props.Country}
                           </label>
                       </p>
                       <p>
                           <label>
                               Programmer Projects:{this.props.Projects}
                           </label>
                       </p>
                       <Projects Project Name={this.props.Name} Projects Language={this.props.Language}/>
                   </div>
               )
           }
       }
       class Projects extends Component{
        render(){
            return(
                <div className="styleclass">
                    <h2>Details of Projects</h2>
                    <p>
                        <label>
                            Project Name:{this.props.Name}
                        </label>
                    </p>
                    <p>
                        <label>
                            Project Language:{this.props.Language}
                        </label>
                    </p>
                   
                </div>
            )

        }
    }
    const element=(
        <Programmers Name="tufail" Country="Pakistan" Language="React"
        Project Name="Website" Project Language="React"/>


    )
    ReactDOM.render(element,document.getElementById('root'))