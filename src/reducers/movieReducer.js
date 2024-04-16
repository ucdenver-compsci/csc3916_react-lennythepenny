// import constants from '../constants/actionTypes'

// let initialState = {
//       movies: [],
//       selectedMovie: null
// }

// const movieReducer = (state = initialState, action) => {
//       let updated = Object.assign({}, state);

//       switch(action.type) {
//             case constants.FETCH_MOVIES:
//                   updated['movies'] = action.movies;
//                   updated['selectedMovie'] = action.movies[0];
//                   return updated;
//             case constants.SET_MOVIE:
//                   updated['selectedMovie'] = action.selectedMovie;
//                   return updated;
//             case constants.FETCH_MOVIE:
//                   updated['selectedMovie'] = action.selectedMovie;
//                   return updated;
//             default:
//                   return state;
//       }
// }

// export default movieReducer;
import constants from '../constants/actionTypes';

const initialState = {
  movies: [],
  selectedMovie: null
};

const movieReducer = (state = initialState, action) => {
  let updated = { ...state };

  switch (action.type) {
    case constants.FETCH_MOVIES:
      updated.movies = action.movies;
      updated.selectedMovie = action.movies[0];
      return updated;
    case constants.SET_MOVIE:
    case constants.FETCH_MOVIE:
      updated.selectedMovie = action.selectedMovie;
      return updated;
    case constants.ADD_REVIEW:
      // Check if the review is for the selected movie
      if (updated.selectedMovie && updated.selectedMovie._id === action.movieId) {
        // Update selectedMovie's movie_reviews with the new review
        updated.selectedMovie = {
          ...updated.selectedMovie,
          movie_reviews: [...updated.selectedMovie.movie_reviews, action.review]
        };
      }
      return updated;
    default:
      return state;
  }
};

export default movieReducer;
