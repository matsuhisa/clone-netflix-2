import { useRecoilValue } from "recoil"
import { FavoriteState } from "../../../states/FavoriteState"

export const MovieFavoriteStates = () => {
  const FavoriteStates = useRecoilValue( FavoriteState )

  return (
    <div>
      お気に入り：{FavoriteStates.length}
    </div>
  )
}