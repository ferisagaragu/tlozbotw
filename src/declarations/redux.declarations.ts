import { combineReducers } from 'redux';
import { materials } from '../core/reducers/material.reducers';
import { userData } from '../core/reducers/login.reducers';
import { news } from '../core/reducers/news.reducers';
import { reducerForm } from '../imports/react-redux.import';

export const reducers = combineReducers({
  userData,
  materials,
  news,
  form: reducerForm
});

export const initState = {
  userData: null,
  materials: null,
  news: null
};