import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';
import '@fortawesome/fontawesome-free/js/all.js';

const youtube = new Youtube(process.env.REACT_APP_NOT_SECRET_CODE);
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
