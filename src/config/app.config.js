import firebase from 'firebase';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers, initState } from '../shared/redux-declarations.shared';

//FIREBASE
export const FIREBASE_AUTH = {
  apiKey: "AIzaSyAPCD6Ai9aASF4j36Sagyn8pI6JlZj3fEE",
  authDomain: "tlozbotw-240a7.firebaseapp.com",
  databaseURL: "https://tlozbotw-240a7.firebaseio.com",
  projectId: "tlozbotw-240a7",
  storageBucket: "tlozbotw-240a7.appspot.com",
  messagingSenderId: "299245941226",
  appId: "1:299245941226:web:c9bac6e300e32279"
};

firebase.initializeApp(FIREBASE_AUTH);

//REDUX
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, initState, composeEnhancers(applyMiddleware(thunk)));