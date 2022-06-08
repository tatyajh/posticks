import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

function NoteList({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleUpdateNote,
  handleRestoreNote,
  trashBinMode
}) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleted={note.deleted}
          handleDeleteNote={handleDeleteNote}
          handleUpdateNote={handleUpdateNote}
          handleRestoreNote={handleRestoreNote}
        />
      ))}
      {!trashBinMode && <AddNote handleAddNote={handleAddNote} />}
      
    </div>
  );
}

export default NoteList;
