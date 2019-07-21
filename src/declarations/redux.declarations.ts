import { combineReducers } from 'redux';
import { materials } from '../core/reducers/material.reducers';
import { userData } from '../core/reducers/login.reducers';
import { news } from '../core/reducers/news.reducers';
import { reducerForm } from '../imports/react-redux.import';
import { UserDataModel } from '../core/models/user-data.model';

export const reducers = combineReducers({
  userData,
  materials,
  news,
  form: reducerForm
});

export const initState = {
  userData: new UserDataModel({
    id: 'FNfi3a5O8sNOI7B3v1HOoCBckOE2',
    name: 'Fernando Fernny',
    email: 'ferisagaragu@gmail.com',
    photo: 'https://lh4.googleusercontent.com/--kQk-D8sBIs/AAAAAAAAAAI/AAAAAAAAGsQ/E_51G-s1xTQ/photo.jpg',
    role: 0
  }),
  materials: null,
  news: null
};