import React from 'react';
import { MovieFavoriteStates } from './components/atoms/MovieFavoriteStates/MovieFavoriteStates';
import { MovieList } from './components/MovieList'
import { requests } from './lib/requests'

export const Top = () => {
  return(
    <>
      <div style={{ position: "fixed", top: "0", width: "100%", backgroundColor: "#ffffff", borderBottom: "1px solid #eeeeee", padding: "5px" }}>
        <MovieFavoriteStates />
      </div>
      <MovieList key="netflix" title={'netflix動向'} featchUrl={requests.feachNetflixOriginals} />
      {/* <MovieList title={'今週の映画動向'} featchUrl={requests.feachDiscoverMovie}></MovieList> */}
      {/* <MovieList title={'今週の動向'} featchUrl={requests.feachTrending}></MovieList> */}
    </>
  )
}
