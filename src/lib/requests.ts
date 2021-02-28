const API_KEY = process.env.REACT_APP_TMDB_API_KEY

export const requests = {
  feachTrending:`/trending/all/week?api_key=${API_KEY}&language=ja`,
}