import { Movie } from "../../interface"
import { MovieFavorite } from './MovieFavorite/MovieFavorite'

type modalDialogMovieProps = {
  show: boolean;
  movie: Movie;
  toggle: VoidFunction;
}

export const ModalDialogMovie = ( { show, movie, toggle }: modalDialogMovieProps ) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original'

  const close = (event: any) => {
    toggle()
  }

  return (
    <>
      {show && (
        <div role="dialog" aria-hidden={!show} className="modal-dialog" onClick={close}>
          <img src={`${baseUrl}${movie.poster_path}`} width={100} />
          <MovieFavorite movie={movie} />
        </div>
      )}
    </>
  )
}