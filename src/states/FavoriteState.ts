import { atom } from "recoil";
import { Movie } from "../interface/index"

const initialFavoriteMovies: Movie[] = []

export const FavoriteState = atom({
  key: 'movieFavorite',
  default: initialFavoriteMovies,
})