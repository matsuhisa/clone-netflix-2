import { useEffect, useState } from "react"
import { Movie } from '../interface/index'
import axios from '../lib/axios'
import { SmallMovie } from './atoms/SmallMovie'

type movieListProps = {
  title: string,
  featchUrl: string
}

export const MovieList = ( { title, featchUrl }: movieListProps ) => {
  const [movieList, setMovieList] = useState<Movie[]>([])
  const fetchUrl = featchUrl

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovieList(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  return (
    <>
      <h1>{title}</h1>
      <ul>
        {movieList.map( (movie) => (
          <li key={movie.id}>
            <SmallMovie movie={movie} />
            {/* <div key={index}>
              <p>{movie.name}</p>
              <p>{movie.title}</p>
              <p>{movie.overview}</p>
              <p>{movie.vote_average}</p>
              <p>日付：{movie.release_date}</p>
              <p>日付：{movie.first_air_date}</p>
              <img src={`${baseUrl}${movie.poster_path}`} width={100} />
              <img src={`${baseUrl}${movie.backdrop_path}`} width={'100%'} />
            </div> */}
          </li>
        ))}
      </ul>
    </>
  )
}