import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./utils/global.scss"
import App from './App';
import "./utils/fancy-components"
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
