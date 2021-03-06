import { Movie } from "../../interface"

type modalDialogMovieProps = {
  show: boolean;
  movie: Movie;
  toggle: VoidFunction;
}

export const ModalDialogMovie = ( { show, movie, toggle }: modalDialogMovieProps ) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original'

  return (
    <>
      {show && (
        <div role="dialog" aria-hddien={!show} className="modal-dialog" onClick={toggle}>
          <img src={`${baseUrl}${movie.poster_path}`} width={100} />
        </div>
      )}
    </>
  )
}