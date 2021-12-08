// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import render from "./miniReact/render"
import  * as React from "./miniReact/index"
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
render(
  // <React.StrictMode>
  //     <App />
  // </React.StrictMode>,
  <div>
    <div>1</div>
    <div>2</div>
    <div></div>
  </div>,
  document.getElementById('root')
)
reportWebVitals();
