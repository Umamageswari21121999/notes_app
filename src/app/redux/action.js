// src/redux/actions/notesActions.js
import axios from 'axios';
import { fetchNotesStart, fetchNotesSuccess, fetchNotesFailure } from '../reducers/notesReducer';


// Action to fetch notes from API
export const fetchNotes = () => async (dispatch) => {
  dispatch(fetchNotesStart());
  try {
    const response = await fetch('http://localhost:5000/api/notes'); // Replace with your API endpoint
    const data = await response.json();
    dispatch(fetchNotesSuccess(data)); // Dispatch success with data
  } catch (error) {
    dispatch(fetchNotesFailure(error.message)); // Dispatch failure with error message
  }
};
