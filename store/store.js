import { createStore } from 'redux';
import { address as reducer } from './reducer';

export const store = createStore(reducer);
