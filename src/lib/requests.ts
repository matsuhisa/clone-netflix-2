const API_KEY = process.env.REACT_APP_TMDB_API_KEY

export const requests = {
  feachTrending:`/trending/movie/week?api_key=${API_KEY}&language=ja`,
  feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213&language=ja`,
  feachDiscoverMovie:`/discover/movie?api_key=${API_KEY}&language=ja`,
}