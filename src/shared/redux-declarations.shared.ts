import { combineReducers } from 'redux';
import { materials } from '../core/reducers/material.reducers';

export const reducers = combineReducers({
  materials
});
  
export const initState = {
  materials: null
};