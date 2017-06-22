import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Routes from './views/routes'
import configureStore from './core/store'

import './views/styles/bootstrap/app.scss'
import './views/styles/font-awesome/css/font-awesome.css'

ReactDOM.render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);