import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MovieList } from './components/MovieList'
import reportWebVitals from './reportWebVitals';
import { requests } from './lib/requests'

ReactDOM.render(
  <React.StrictMode>
    <MovieList title={'今週の動向'} featchUrl={requests.feachTrending}></MovieList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
