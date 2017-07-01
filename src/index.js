import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Routes from './views/routes'
import configureStore from './core/store'

import './views/styles/loading/loading.css'
import './views/styles/bootstrap/app.scss'
import './views/styles/font-awesome/css/font-awesome.css'
import './views/styles/video-react/video-react.css'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
