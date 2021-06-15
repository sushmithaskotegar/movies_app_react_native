import { GET_MOVIE, SEARCH_MOVIE, TOGGLE_FAVOURITE } from "../types";

const initialState = { movies: [], favMovie: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movies: action.payload };
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favMovie.findIndex(
        (movie) => movie.imdbID === action.payload
      );

      if (existingIndex >= 0) {
        const updatedMovies = [...state.favMovie];
        updatedMovies.splice(existingIndex, 1);
        return { ...state, favMovie: updatedMovies };
      } else {
        const movie = state.movies.Search.find(
          (movies) => movies.imdbID === action.payload
        );
        return { ...state, favMovie: state.favMovie.concat(movie) };
      }
    default:
      return state;
  }
}
