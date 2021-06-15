import { GET_MOVIE, TOGGLE_FAVOURITE } from "../types";

export const moviesPosts = (page) => (dispatch) => {
  console.log(page,"page from action");
  fetch(`http://www.omdbapi.com/?s=naruto&apikey=de21dc19&page=${page}`)
    .then((res) => res.json())

    .then((posts) =>
      dispatch({
        type: GET_MOVIE,
        payload: posts,
      })
    );
};
export const toggleFavourite = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_FAVOURITE,
    payload: id,
  });
};
