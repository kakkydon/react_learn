// npm i - D @types/react
// npm i - D @types/react-dom
// がなぜが必要
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopPage from './pages/topPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <TopPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
