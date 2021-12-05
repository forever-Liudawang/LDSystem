import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './common.less';
import store from './store/index';
import { Provider } from 'react-redux';
import './utils/file';
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
