import { createStore, combineReducers } from 'redux';
import * as reducers from './reducer';

const rootReducers = combineReducers(reducers);

const store = (initialState) => {
  return createStore(rootReducers, initialState);
};
export default store;
