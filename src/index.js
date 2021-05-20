import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// const element = <h1 className="styleclass">Welcome to react programming class day one </h1>
// ReactDOM.render(element,document.getElementById('root'));
//if we want to make two h1 what will wwe do
// const newelement= <h1 className="styleclass">Welcome to react programming class day one </h1>
// const element = <h1 className="styleclass">hello to all</h1>
// ReactDOM.render(element,document.getElementById('root'));
// ReactDOM.render(element,document.getElementById('root2'));
//it is working but it is not the solution
// const element=(
//   <div className="styleclass">git
//     <h1>welcome to the class day one</h1>
//     <h1>hello to the class day two</h1>
//   </div>

// );
const element =(
  React.createElement('div',{className:"styleclass"},React.createElement('h1',null,"welcome to all of you"),
  React.createElement('h1',null,"hello to all of you"))
)
ReactDOM.render(element,document.getElementById('root'))

