import { Link } from "react-router-dom"
import { MovieFavoriteStates } from "./components/atoms/MovieFavoriteStates/MovieFavoriteStates"

type Props = {
  id: any
}

export const Detail = ({match}: any) => {
  console.table(match.params.id)
  return (
    <>
      <Link to='/'>
        トップページ
      </Link>
      <MovieFavoriteStates />
      <div>詳細ページ予定地123</div>
    </>
  )
}