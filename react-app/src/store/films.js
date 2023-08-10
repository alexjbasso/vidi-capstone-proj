// ===Action Types===
const LOAD_FILMS = 'films/LOAD_FILMS';
const LOAD_FILM = 'films/LOAD_FILM';
const ADD_FILM = 'films/ADD_FILM';
const EDIT_FILM = 'films/EDIT_FILM';
const DELETE_FILM = 'films/DELETE_FILM';


// ===Action Creators===
// Get All Films Action
export const getAllFilmsAction = (films) => {
  return {
    type: LOAD_FILMS,
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



// ===Thunks===
// Get All Albums Thunk
export const getAllFilmsThunk = () => async (dispatch) => {
  const response = await fetch('/api/films');
  const films = await response.json();
  dispatch(getAllFilmsAction(films));
  return response;
};

// Get Album by ID Thunk
export const getFilmByIdThunk = (filmId) => async (dispatch) => {
  const response = await fetch(`/api/films/${filmId}`);
  const film = await response.json();
  console.log(film)
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
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

//Edit a Film Thunk
export const editFilmThunk = (album, formData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/films/${album.id}/edit`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
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



// ===Reducer===
const initialState = {
  allFilms: {},
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
    case LOAD_FILM:
      return { ...state, singleFilm: { [action.payload.id]: action.payload } };
    case ADD_FILM:
      return { ...state, allFilms: { ...state.allFilms, [action.payload.id]: action.payload } };
    case EDIT_FILM:
      return { ...state, singleFilm: { [action.payload.id]: action.payload } };
    default:
      return state;
  }
}
