import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './imports/react-redux.import';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './modules/app';
import * as serviceWorker from './serviceWorker';
import { store } from './config/app.config';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
serviceWorker.unregister();
