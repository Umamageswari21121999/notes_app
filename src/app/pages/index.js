'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote, updateNote } from '../actions/notesActions';
import { useFormik } from 'formik'; 
import * as Yup from 'yup'; 

import Navbar from '../components/navbar';  

const HomePage = () => {
  const dispatch = useDispatch();
  const { notes, loading, error } = useSelector((state) => state.notes);


  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', content: '' });


  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .min(3, 'Title must be at least 3 characters'),
    content: Yup.string()
      .required('Content is required')
      .min(5, 'Content must be at least 5 characters'),
  });


  const formik = useFormik({
    initialValues: { title: '', content: '' },
    validationSchema,
    onSubmit: (values) => {
      if (newNote.id) {
        dispatch(updateNote(values)); 
      } else {
        dispatch(addNote(values)); 
      }
      setNewNote({ title: '', content: '' });
      setShowModal(false);
    },
  });

  const handleEditNote = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    setNewNote(noteToEdit);
    formik.setValues({ title: noteToEdit.title, content: noteToEdit.content });
    setShowModal(true);
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  if (loading) return <p>Loading notes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />

      <h1 className="welcome-text"><b>Good Morning Uma!</b></h1>
      <div className="home-container">
          
        <h1 className="page-title">Your Notes</h1>

        <button className="add-note-btn" onClick={() => setShowModal(true)}>
          + Add New Note
        </button>


        {showModal && (
          <div className="modal-overlay">
            <div className="modal-container">
              <h2>{newNote.id ? 'Edit Note' : 'Create a New Note'}</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="input-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <div className="error">{formik.errors.title}</div>
                  ) : null}
                </div>

                <div className="input-group">
                  <label htmlFor="content">Content</label>
                  <textarea
                    id="content"
                    name="content"
                    value={formik.values.content}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.content && formik.errors.content ? (
                    <div className="error">{formik.errors.content}</div>
                  ) : null}
                </div>

                <button className="btn" type="submit">
                  {newNote.id ? 'Update Note' : 'Add Note'}
                </button>
                <button className="btn cancel-btn" type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        
        <div className="notes-list">
          {notes.map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="note-actions">
                <button className="btn edit-btn" onClick={() => handleEditNote(note.id)}>Edit</button>
                <button className="btn delete-btn" onClick={() => handleDeleteNote(note.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .home-container {
            max-width: 1000px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .welcome-text {
            font-size: 2.5rem;
            text-align: center;
            font-weight: 700;
            color: #333;
            margin-bottom: 20px;
            padding: 20px;
            background-color: #f0f8ff; /* Light blue background */
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          }

          .page-title {
            text-align: center;
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 20px;
          }

          .add-note-btn {
            display: block;
            margin: 0 auto 30px;
            background-color: #28a745;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 8px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .add-note-btn:hover {
            background-color: #218838;
          }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-container {
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            width: 400px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .input-group {
            margin-bottom: 20px;
          }

          .input-group label {
            display: block;
            font-size: 1.1rem;
            margin-bottom: 8px;
            color: #333;
          }

          .input-group input,
          .input-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
            transition: border-color 0.3s;
          }

          .input-group input:focus,
          .input-group textarea:focus {
            border-color: #007bff;
            outline: none;
          }

          .error {
            color: red;
            font-size: 0.9rem;
          }

          .btn {
            background-color: #007bff;
            color: white;
            padding: 12px;
            border: none;
            border-radius: 6px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s;
            width: 100%;
          }

          .btn:hover {
            background-color: #0056b3;
          }

          .cancel-btn {
            background-color: #ccc;
            margin-top: 10px;
          }

          .cancel-btn:hover {
            background-color: #999;
          }

          .notes-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 30px;
          }

          .note-card {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .note-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          }

          .note-card h3 {
            margin-top: 0;
            font-size: 1.5rem;
          }
        `}</style>
      </div>
    </div>
  );
};

export default HomePage;
