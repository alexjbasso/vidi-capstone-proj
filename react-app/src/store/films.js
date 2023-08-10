// ===Action Types===
const LOAD_FILMS = 'albums/LOAD_FILMS';
const LOAD_FILM = 'albums/LOAD_FILM';
const CREATE_FILM = 'albums/CREATE_FILM';
const UPDATE_FILM = 'albums/UPDATE_FILM';
const DELETE_FILM = 'albums/DELETE_FILM';


// ===Action Creators===

// Get All Films Action
export const getAllFilmsAction = (films) => {
  return {
    type: LOAD_FILMS,
    payload: films,
  };
};

//Get Film by ID Action
export const getFilmByIdAction = (film) => {
  return {
    type: LOAD_FILM,
    payload: film,
  };
};

// ===Thunks===

//Get All Albums Thunk
export const getAllFilmsThunk = () => async (dispatch) => {
  const response = await fetch('/api/films');
  const films = await response.json();
  dispatch(getAllFilmsAction(films));
  return response;
};

//Get Album by ID Thunk
export const getFilmByIdThunk = (filmId) => async (dispatch) => {
  const response = await fetch(`/api/films/${filmId}`);
  const film = await response.json();
  console.log(film)
  if (response.ok) {
    dispatch(getFilmByIdAction(film));
  }
  return film;
};

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
    default:
      return state;
  }
}
