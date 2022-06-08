import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('posticks-data');
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        {
          id: nanoid(),
          text: 'First quote!',
          date: '10/04/2020'
        },
        {
          id: nanoid(),
          text: 'Second note!',
          date: '21/10/2021'
        },
        {
          id: nanoid(),
          text: 'Lastest Sticky!',
          date: '01/06/2022'
        }
      ]
    );
  });

  const [searchText, setSearchText] = useState('');
  const [trashBinMode, setTrashBinMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('posticks-data', JSON.stringify(notes));
  }, [notes]);

  function addNote(text) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function updateNote({ id, text }) {
    const note = notes.find((n) => n.id === id);
    if (note) {
      const newNotes = [
        ...notes.filter((note) => note.id !== id),
        { ...note, text }
      ];
      setNotes(newNotes);
    }
  }

  const deleteNote = (id) => {
    const note = notes.find((n) => n.id === id);
    if (note && note.deleted) {
      deleteForeverNote(id);
    } else {
      toggleNote(id, true);
    }
  };

  const restoreNote = (id) => {
    toggleNote(id, false);
  };

  const toggleNote = (id, deleted) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      const newNotes = [
        ...notes.filter((note) => note.id !== id),
        { ...note, deleted }
      ];
      setNotes(newNotes);
    }
  };

  const deleteForeverNote = (id) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    }
  };

  const clearTrashBin = () => {
    const newNotes = notes.filter((note) => !note.deleted);
    setNotes(newNotes);
  };
  return (
    <div className={`${trashBinMode && 'bin-mode'}`}>
      <div className="container">
        <Header
          handleTrashBin={setTrashBinMode}
          binIsEmpty={notes.filter((note) => note.deleted).length === 0}
          trashBinMode={trashBinMode}
          clearTrashBin={clearTrashBin}
        />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter(
            (note) =>
              note.text.toLowerCase().includes(searchText) &&
              ((trashBinMode && note.deleted) ||
                (!trashBinMode && !note.deleted))
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleUpdateNote={updateNote}
          handleRestoreNote={restoreNote}
          trashBinMode={trashBinMode}
        />
      </div>
    </div>
  );
}

export default App;
