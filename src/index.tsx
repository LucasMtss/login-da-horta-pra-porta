import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  // <React.StrictMode> // Problema com a lib de mask
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);
