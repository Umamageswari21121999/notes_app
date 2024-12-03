// src/redux/actions/notesActions.js
import { v4 as uuidv4 } from 'uuid';

// Action types
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const GET_NOTES = 'GET_NOTES';

// Action to add a new note
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: { ...note, id: uuidv4() },  // Generate a unique ID for the note
});

// Action to update an existing note
export const updateNote = (updatedNote) => ({
  type: UPDATE_NOTE,
  payload: updatedNote,
});

// Action to delete a note
export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

// Action to get all notes
export const getNotes = () => ({
  type: GET_NOTES,
});
