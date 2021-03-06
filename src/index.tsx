import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MovieList } from './components/MovieList'
import { requests } from './lib/requests'
import { MovieFavoriteStates } from './components/atoms/MovieFavoriteStates/MovieFavoriteStates'
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <div style={{ position: "fixed", top: "0", width: "100%", backgroundColor: "#ffffff", borderBottom: "1px solid #eeeeee", padding: "5px" }}>
        <MovieFavoriteStates />
      </div>
      <MovieList key="netflix" title={'netflix動向'} featchUrl={requests.feachNetflixOriginals} />
      {/* <MovieList title={'今週の映画動向'} featchUrl={requests.feachDiscoverMovie}></MovieList> */}
      {/* <MovieList title={'今週の動向'} featchUrl={requests.feachTrending}></MovieList> */}
      <MovieFavoriteStates />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
