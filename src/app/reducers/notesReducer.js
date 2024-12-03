
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
        notes: state.notes,  
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload], 
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note  
        ),
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload), 
      };
    default:
      return state;
  }
};

export default notesReducer;
