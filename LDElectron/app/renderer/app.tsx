import React from 'react';
import ReactDOM from 'react-dom';
import Router from './page/Home';
import './common.less';
function App() {
  return <Router />;
}

ReactDOM.render(<App />, document.getElementById('root'));
