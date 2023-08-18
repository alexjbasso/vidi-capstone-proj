// ===Action Types===
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const LOAD_REVIEW = 'reviews/LOAD_REVIEW';
const LOAD_USER_REVIEWS = 'reviews/LOAD_USER_REVIEWS';
const LOAD_FILM_REVIEWS = 'reviews/LOAD_FILM_REVIEWS';
const ADD_REVIEW_TO_FILM = 'reviews/ADD_REVIEW_TO_FILM';
const EDIT_REVIEW_OF_FILM = 'reviews/EDIT_REVIEW_OF_FILM';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';
const CLEAR_REVIEWS = 'reviews/CLEAR_REVIEWS';

// ===Action Creators===
// Get All Reviews Action
export const getAllReviewsAction = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    payload: reviews,
  };
};

// Get All User's Reviews Action
export const getAllUserReviewsAction = (reviews) => {
  return {
    type: LOAD_USER_REVIEWS,
    payload: reviews,
  };
};

// Get All User's Reviews Action
export const getAllFilmReviewsAction = (reviews) => {
  return {
    type: LOAD_FILM_REVIEWS,
    payload: reviews,
  };
};

// Get Review by ID Action
export const getReviewByIdAction = (review) => {
  return {
    type: LOAD_REVIEW,
    payload: review,
  };
};

// Create Review Action
export const addReviewAction = (review) => {
  return {
    type: ADD_REVIEW_TO_FILM,
    payload: review,
  };
};


// Edit a Review Action
export const editReviewAction = (review) => {
  return {
    type: EDIT_REVIEW_OF_FILM,
    payload: review,
  };
};

// Delete a Review Action
export const deleteReviewAction = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    payload: reviewId,
  };
};

// Clear Reviews State Action
export const clearReviewsAction = () => {
  return { type: CLEAR_REVIEWS }
};


// ===Thunks===
// Get All Reviews Thunk
export const getAllReviewsThunk = () => async (dispatch) => {
  const response = await fetch('/api/reviews');
  const reviews = await response.json();
  dispatch(getAllReviewsAction(reviews));
  return response;
};

// Get All Reviews of Current User Thunk
export const getAllReviewsOfUserThunk = () => async (dispatch) => {
  const response = await fetch('/api/reviews/current');
  const reviews = await response.json();
  dispatch(getAllUserReviewsAction(reviews));
  return response;
};

// Get All Reviews of Film Thunk
export const getAllReviewsOfFilmThunk = (filmId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/film/${filmId}`);
  const reviews = await response.json();
  if (response.ok) {
    dispatch(getAllFilmReviewsAction(reviews));
  }
  return reviews;
};

// Get Review by ID Thunk
export const getReviewByIdThunk = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}`);
  const review = await response.json();
  if (response.ok) {
    dispatch(getReviewByIdAction(review));
  }
  return review;
};

// Add a Review Thunk
export const addReviewThunk = (formData) => async (dispatch) => {
  try {
    const response = await fetch('/api/reviews/new', {
      method: 'POST',
      body: formData,
    });
    const newReview = await response.json();
    if (!response.ok) {
      throw new Error(newReview)
    }
    return dispatch(addReviewAction(newReview))
  } catch (err) {
    return err
  }
};

//Edit a Review Thunk
export const editReviewThunk = (review, formData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/reviews/${review.id}/edit`, {
      method: 'PUT',
      body: formData,
    });
    const editedReview = await response.json();
    if (!response.ok) {
      throw new Error(editedReview)
    }
    return dispatch(editReviewAction(editedReview))
  } catch (err) {
    return err
  }
}

//Delete a Review Thunk
export const deleteReviewThunk = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}/delete`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(deleteReviewAction(reviewId));
    return response;
  }
};


// ===Reducer===
const initialState = {
  allReviews: {},
  allUserReviews: {},
  allFilmReviews: {},
  singleReview: {}
}

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REVIEWS:
      const allReviewsObject = {};
      action.payload.forEach((review) => {
        allReviewsObject[review.id] = review;
      });
      return { ...state, allReviews: allReviewsObject };
    case LOAD_USER_REVIEWS:
      const allUserReviewsObject = {};
      action.payload.forEach((review) => {
        allUserReviewsObject[review.id] = review;
      });
      return { ...state, allUserReviews: allUserReviewsObject };
    case LOAD_FILM_REVIEWS:
      const allFilmReviewsObject = {};
      action.payload.forEach((review) => {
        allFilmReviewsObject[review.id] = review;
      });
      return { ...state, allFilmReviews: allFilmReviewsObject };
    case LOAD_REVIEW:
      return { ...state, singleReview: { [action.payload.id]: action.payload } };
    case ADD_REVIEW_TO_FILM:
      return { ...state, allFilmReviews: { ...state.allFilmReviews, [action.payload.id]: action.payload } };
    case EDIT_REVIEW_OF_FILM:
      return { ...state, allFilmReviews: { ...state.allFilmReviews, [action.payload.id]: action.payload } };
    case DELETE_REVIEW:
      const allReviewsObj = { ...state.allReviews };
      delete allReviewsObj[action.payload];
      return { ...state, allReviews: allReviewsObj };
    case CLEAR_REVIEWS:
      return {};
    default:
      return state;
  }
}
