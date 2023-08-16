// ===Action Types===
const LOAD_PEOPLE = 'people/LOAD_PEOPLE';
const LOAD_PERSON = 'people/LOAD_PERSON';
const ADD_PERSON = 'people/ADD_PERSON';
const EDIT_PERSON = 'people/EDIT_PERSON';
const DELETE_PERSON = 'people/DELETE_PERSON';


// ===Action Creators===
// Get All People Action
export const getAllPeopleAction = (people) => {
  return {
    type: LOAD_PEOPLE,
    payload: people,
  };
};

// Get Person by ID Action
export const getPersonByIdAction = (person) => {
  return {
    type: LOAD_PERSON,
    payload: person,
  };
};

// Create Person Action
export const addPersonAction = (person) => {
  return {
    type: ADD_PERSON,
    payload: person,
  };
};

// Edit a Person Action
export const editPersonAction = (person) => {
  return {
    type: EDIT_PERSON,
    payload: person,
  };
};

// Delete a Person Action
export const deletePersonAction = (personId) => {
  return {
    type: DELETE_PERSON,
    payload: personId,
  };
};


// ===Thunks===
// Get All People Thunk
export const getAllPeopleThunk = () => async (dispatch) => {
  const response = await fetch('/api/people');
  const people = await response.json();
  dispatch(getAllPeopleAction(people));
  return response;
};

// Get All People of Current User Thunk
export const getAllPeopleOfUserThunk = () => async (dispatch) => {
  const response = await fetch('/api/people/current');
  const people = await response.json();
  dispatch(getAllPeopleAction(people));
  return response;
};

// Get Person by ID Thunk
export const getPersonByIdThunk = (personId) => async (dispatch) => {
  const response = await fetch(`/api/people/${personId}`);
  const person = await response.json();
  if (response.ok) {
    dispatch(getPersonByIdAction(person));
  }
  return person;
};

// Add a Person Thunk
export const addPersonThunk = (formData) => async (dispatch) => {
  try {
    const response = await fetch('/api/people/new', {
      method: 'POST',
      body: formData,
    });
    const newPerson = await response.json();
    if (!response.ok) {
      throw new Error(newPerson)
    }
    return dispatch(addPersonAction(newPerson))
  } catch (err) {
    return err
  }
};

// Add role
export const roleAddThunk = (formData) => async (dispatch) => {
  const response = await fetch('/api/roles/new', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  const newRole = await response.json();
}

//Edit a Person Thunk
export const editPersonThunk = (person, formData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/people/${person.id}/edit`, {
      method: 'PUT',
      body: formData,
    });
    const editedPerson = await response.json();
    if (!response.ok) {
      throw new Error(editedPerson)
    }
    return dispatch(editPersonAction(editedPerson))
  } catch (err) {
    return err
  }
}

//Delete a Person Thunk
export const deletePersonThunk = (personId) => async (dispatch) => {
  const response = await fetch(`/api/people/${personId}/delete`, {
    method: 'DELETE',
  });

  if (response.ok) {
    dispatch(deletePersonAction(personId));
    return response;
  }
};





// ===Reducer===
const initialState = {
  allPeople: {},
  singlePerson: {}
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PEOPLE:
      const allPeopleObject = {};
      action.payload.forEach((person) => {
        allPeopleObject[person.id] = person;
      });
      return { ...state, allPeople: allPeopleObject };
    case LOAD_PERSON:
      return { ...state, singlePerson: { [action.payload.id]: action.payload } };
    case ADD_PERSON:
      return { ...state, allPeople: { ...state.allPeople, [action.payload.id]: action.payload } };
    case EDIT_PERSON:
      return { ...state, singlePerson: { [action.payload.id]: action.payload } };
    case DELETE_PERSON:
      const allPeopleObj = { ...state.allPeople };
      delete allPeopleObj[action.payload];
      return { ...state, allPeople: allPeopleObj };
    default:
      return state;
  }
}
