import { combineReducers } from 'redux';
import { materials, materialsModal } from '../core/reducers/material.reducers';
import { reducerForm } from '../imports/react-redux.import';

export const reducers = combineReducers({
  materials,
  materialsModal,
  form: reducerForm
});
  
export const initState = {
  materials: null,
  materialsModal: false
};