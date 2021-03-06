import { useState } from 'react'
import { Movie } from '../../interface'
import { ModalDialogMovie } from './ModalDialogMovie'

type SmallMovieProps = {
  movie: Movie
}

export const SmallMovie = ( { movie }: SmallMovieProps ) => {
  const [show, setShow] = useState(false)

  const toggleDialog = () => {
    if(show) {
      setShow(false)
    }else{
      setShow(true)
    }
  }

  return (
    <>
      <div key={movie.id} onClick={toggleDialog}>
        {movie.name}
        <ModalDialogMovie show={show} movie={movie} toggle={toggleDialog} />
      </div>
    </>
  )
}