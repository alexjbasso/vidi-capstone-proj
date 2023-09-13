// ===Action Types===
const LOAD_USER_VIEWS = 'seens/LOAD_USER_VIEWS';
const ADD_VIEW = 'seens/ADD_VIEW';
const REMOVE_VIEW = 'seens/REMOVE_VIEW';

// ===Action Creators===
// Get All User's Views Action
export const getAllUserViewsAction = (views) => {
  return {
    type: LOAD_USER_VIEWS,
    payload: views,
  };
};

// Add View Action
export const addViewAction = (view) => {
  return {
    type: ADD_VIEW,
    payload: view,
  };
};

// Remove a View Action
export const removeViewAction = (view) => {
  return {
    type: REMOVE_VIEW,
    payload: view,
  };
};


// ===Thunks===
// Get All Views of Current User Thunk
export const getAllUserViewsThunk = () => async (dispatch) => {
  const response = await fetch(`/api/seen/current`);
  const views = await response.json();
  if (response.ok) {
    dispatch(getAllUserViewsAction(views));
  }
  return views;
}

// Add View to Film Thunk
export const addViewThunk = (filmId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/seen/${filmId}`, {
      method: 'POST'
    });
    const view = await response.json();
    if (!response.ok) {
      throw new Error(view);
    }
    return dispatch(addViewAction(view))
  } catch (err) {
    return err;
  }
}

// Remove View from Film Thunk
export const removeViewThunk = (filmId) => async (dispatch) => {
  const response = await fetch(`/api/seen/${filmId}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(removeViewAction(filmId));
    return response;
  }
}



// ===Reducer===
const initialState = {
  userViews: {},
  filmViews: {}
}

export default function viewsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_VIEWS:
      const allUserViewsObject = {};
      action.payload.forEach((view) => {
        allUserViewsObject[view.film_id] = view;
      });
      return { ...state, userViews: allUserViewsObject };
    case ADD_VIEW:
      return {...state, userViews: {...state.userViews, [action.payload.film_id]: action.payload}}
    case REMOVE_VIEW:
      const userViewsObject = {...state.userViews};
      delete userViewsObject[action.payload];
      return {...state, userViews: userViewsObject}
    default:
      return state
  }
}
