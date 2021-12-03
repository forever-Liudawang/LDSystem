import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './common.less';
function App() {
  return <Router />;
}

ReactDOM.render(<App />, document.getElementById('root'));
