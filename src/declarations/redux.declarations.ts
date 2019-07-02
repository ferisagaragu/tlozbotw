import { combineReducers } from 'redux';
import { materials } from '../core/reducers/material.reducers';
import { reducerForm } from '../imports/react-redux.import';

export const reducers = combineReducers({
  materials,
  form: reducerForm
});
  
export const initState = {
  materials: null
};