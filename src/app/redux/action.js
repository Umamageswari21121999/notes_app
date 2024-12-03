
import axios from 'axios';
import { fetchNotesStart, fetchNotesSuccess, fetchNotesFailure } from '../reducers/notesReducer';

export const fetchNotes = () => async (dispatch) => {
  dispatch(fetchNotesStart());
  try {
    const response = await fetch('http://localhost:5000/api/notes'); // Replace with your API endpoint
    const data = await response.json();
    dispatch(fetchNotesSuccess(data)); 
  } catch (error) {
    dispatch(fetchNotesFailure(error.message)); 
  }
};
