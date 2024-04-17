// reviewActions.js

// Define action type constants
export const ADD_REVIEW = 'ADD_REVIEW';

// Action creator function for adding a review
export function addReview(movieId, reviewData) {
  return {
    type: ADD_REVIEW,
    movieId: movieId,
    review: reviewData
  };
}
