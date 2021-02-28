import { useEffect, useState } from "react"
import { Movie } from '../interface/index'
import axios from '../lib/axios'

type movieListProps = {
  title: string,
  featchUrl: string
}

export const MovieList = ( { title, featchUrl }: movieListProps ) => {
  const [movieList, setMovieList] = useState<Movie[]>([])
  const fetchUrl = featchUrl
  const baseUrl = 'https://image.tmdb.org/t/p/original'

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
      {movieList.map( (movie, index) => (
          <div key={index}>
            <p>{movie.title}</p>
            <p>{movie.original_name}</p>
            <img key={index} src={`${baseUrl}${movie.poster_path}`} width={100} />
          </div>
      ))}
    </>
  )
}