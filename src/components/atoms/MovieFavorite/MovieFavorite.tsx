import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { Movie } from '../../../interface';
import { FavoriteState } from '../../../states/FavoriteState';
import './favorite.scss';

type FavoriteProps = {
  movie: Movie
}

export const MovieFavorite = ({ movie }: FavoriteProps) => {
  const [FavoriteStates, setFavoriteStates] = useRecoilState(FavoriteState)
  const index = FavoriteStates.findIndex((item) => item == movie)
  const [favorite, setFavorite] = useState(index >= 0 ? true:false)

  const toggle = (event: any) => {
    event.stopPropagation()

    if(index >= 0) {
      setFavorite(false)
      setFavoriteStates( old => {
        return [...old.slice(0, index), ...old.slice(index + 1)]
      } )
    }else{
      setFavorite(true)
      setFavoriteStates( old => {
        return [...old, movie]
      })  
    }
  }

  return (
    <input type="button" value="お気に入り" className="favorite" onClick={toggle} aria-checked={favorite} />
  )
}