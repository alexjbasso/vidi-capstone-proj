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
        allUserViewsObject[view.id] = view;
      });
      return { ...state, userViews: allUserViewsObject };
    default:
      return state
  }
}
