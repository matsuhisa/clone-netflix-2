import { useEffect, useState } from "react"
import { Movie } from '../interface/index'
import axios from '../lib/axios'
import { requests } from '../lib/requests'

export const MovieList = () => {
  const [movieList, setMovieList] = useState<Movie[]>([])
  const fetchUrl = requests.feachTrending
  const baseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovieList(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movieList);

  return (
    <>
      <h1>weekly trending movies</h1>
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