// ===Action Types===
const LOAD_FILMS = 'films/LOAD_FILMS';
const LOAD_FILM = 'films/LOAD_FILM';
const LOAD_USER_FILMS = 'films/LOAD_USER_FILMS';
const ADD_FILM = 'films/ADD_FILM';
const EDIT_FILM = 'films/EDIT_FILM';
const DELETE_FILM = 'films/DELETE_FILM';
const CLEAR_FILMS = 'films/CLEAR_FILMS';


// ===Action Creators===
// Get All Films Action
export const getAllFilmsAction = (films) => {
  return {
    type: LOAD_FILMS,
    payload: films,
  };
};

// Get All User's Films Action
export const getAllUserFilmsAction = (films) => {
  return {
    type: LOAD_USER_FILMS,
    payload: films,
  };
};

// Get Film by ID Action
export const getFilmByIdAction = (film) => {
  return {
    type: LOAD_FILM,
    payload: film,
  };
};

// Create Film Action
export const addFilmAction = (film) => {
  return {
    type: ADD_FILM,
    payload: film,
  };
};

// Edit a Film Action
export const editFilmAction = (film) => {
  return {
    type: EDIT_FILM,
    payload: film,
  };
};

// Delete a Film Action
export const deleteFilmAction = (filmId) => {
  return {
    type: DELETE_FILM,
    payload: filmId,
  };
};

// Clear Films State Action
export const clearFilmsAction = () => {
  return { type: CLEAR_FILMS }
};


// ===Thunks===
// Get All Films Thunk
export const getAllFilmsThunk = () => async (dispatch) => {
  const response = await fetch('/api/films');
  const films = await response.json();
  dispatch(getAllFilmsAction(films));
  return response;
};

// Get All Films of Current User Thunk
export const getAllFilmsOfUserThunk = () => async (dispatch) => {
  const response = await fetch('/api/films/current');
  const films = await response.json();
  dispatch(getAllUserFilmsAction(films));
  return response;
};

// Get Film by ID Thunk
export const getFilmByIdThunk = (filmId) => async (dispatch) => {
  const response = await fetch(`/api/films/${filmId}`);
  const film = await response.json();
  if (response.ok) {
    dispatch(getFilmByIdAction(film));
  }
  return film;
};

// Add a Film Thunk
export const addFilmThunk = (formData) => async (dispatch) => {
  try {
    const response = await fetch('/api/films/new', {
      method: 'POST',
      body: formData,
    });
    const newFilm = await response.json();
    if (!response.ok) {
      throw new Error(newFilm)
    }
    return dispatch(addFilmAction(newFilm))
  } catch (err) {
    return err
  }
};

// Add role
export const roleAddPersonToFilmThunk = (formData) => async (dispatch) => {
  const response = await fetch('/api/roles/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const newRole = await response.json();
}

//Edit a Film Thunk
export const editFilmThunk = (film, formData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/films/${film.id}/edit`, {
      method: 'PUT',
      body: formData,
    });
    const editedFilm = await response.json();
    if (!response.ok) {
      throw new Error(editedFilm)
    }
    return dispatch(editFilmAction(editedFilm))
  } catch (err) {
    return err
  }
}

//Delete a Film Thunk
export const deleteFilmThunk = (filmId) => async (dispatch) => {
  const response = await fetch(`/api/films/${filmId}/delete`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(deleteFilmAction(filmId));
    return response;
  }
};


// ===Reducer===
const initialState = {
  allFilms: {},
  allUserFilms: {},
  singleFilm: {}
}

export default function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FILMS:
      const allFilmsObject = {};
      action.payload.forEach((film) => {
        allFilmsObject[film.id] = film;
      });
      return { ...state, allFilms: allFilmsObject };
    case LOAD_USER_FILMS:
      const allUserFilmsObject = {};
      action.payload.forEach((film) => {
        allUserFilmsObject[film.id] = film;
      });
      return { ...state, allUserFilms: allUserFilmsObject };
    case LOAD_FILM:
      return { ...state, singleFilm: { [action.payload.id]: action.payload } };
    case ADD_FILM:
      return { ...state, allFilms: { ...state.allFilms, [action.payload.id]: action.payload } };
    case EDIT_FILM:
      return { ...state, singleFilm: { [action.payload.id]: action.payload } };
    case DELETE_FILM:
      const allUserFilmsObj = { ...state.allUserFilms };
      delete allUserFilmsObj[action.payload];
      return { ...state, allUserFilms: allUserFilmsObj };
    case CLEAR_FILMS:
      return {};
    default:
      return state;
  }
}
