
import { v4 as uuidv4 } from 'uuid';

export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const GET_NOTES = 'GET_NOTES';


export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: { ...note, id: uuidv4() },
});


export const updateNote = (updatedNote) => ({
  type: UPDATE_NOTE,
  payload: updatedNote,
});


export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});


export const getNotes = () => ({
  type: GET_NOTES,
});
