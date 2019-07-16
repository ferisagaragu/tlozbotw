import { combineReducers } from 'redux';
import { materials } from '../core/reducers/material.reducers';
import { userData } from '../core/reducers/login.reducers';
import { news } from '../core/reducers/news.reducers';
import { reducerForm } from '../imports/react-redux.import';
import { UserDataModel } from '../core/models/user-data.model';
import testAvatar from '../styles/img/test_avatar.png';

export const reducers = combineReducers({
  userData,
  materials,
  news,
  form: reducerForm
});

export const initState = {
  userData: new UserDataModel({
    id:'test-id',
    name:'Zelda',
    email:'zelda@test.com',
    phoneNumber:'3381457712',
    photo: testAvatar,
    role: 1
  }),
  materials: null,
  news: null
};