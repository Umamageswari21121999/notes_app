// src/redux/reducers/notesReducer.js
import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, GET_NOTES } from '../actions/notesActions';

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: state.notes,  // If we already have notes, return them (can be modified later for an API call)
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload], // Add the new note to the state
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note  // Update the note in the state
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload), // Delete the note from the state
      };
    default:
      return state;
  }
};

export default notesReducer;
