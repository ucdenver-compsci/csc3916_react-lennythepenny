
export const ADD_REVIEW = 'ADD_REVIEW';
//action creator function for adding a review
export function addReview(movieId, reviewData) {
  return {
    type: ADD_REVIEW,
    movieId: movieId,
    review: reviewData
  };
}
