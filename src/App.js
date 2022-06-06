import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList  from  './components/NotesList';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note',
      date: '1/6/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note',
      date: '2/6/2022',
    },
    {
      id: nanoid(),
      text: 'This is my third note',
      date: '3/6/2022',
    },
    {
      id: nanoid(),
      text: 'This is my fourth note',
      date: '4/6/2022',
    },

    {
      id: nanoid(),
      text: 'This is my new note',
      date: '5/6/2022',
    },
  ]);

    function addNote(text) {
       const date = new Date();
       const newNote = {
         id: nanoid(),
         text: text,
         date: date.toLocaleDateString()
      };
      const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

  return (
    <div className="container">
      <NotesList
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        />
    </div>

  );
}

export default App;

