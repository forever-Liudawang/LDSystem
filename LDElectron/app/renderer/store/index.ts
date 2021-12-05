import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers, Action } from 'redux';

const initState = {
  appName: '简历应用平台',
};
function reducer(state = initState, action: Action) {
  //   switch (action.type) {
  //   }
  return state;
}
const store = createStore(reducer);
export default store;
