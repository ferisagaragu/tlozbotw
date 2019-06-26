import { combineReducers } from 'redux';
import { testData } from '../core/reducers/example.reducers';

export const reducers = combineReducers({
  testData
});
  
export const initState = {
  testData: null
};