import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var script = document.createElement('script');
script.src = 'https://apis.google.com/js/client.js'
document.body.appendChild(script);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
