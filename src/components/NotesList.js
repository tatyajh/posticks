/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

function renderNotes(
  notes,
  handleDeleteNote,
  handleUpdateNote,
  handleRestoreNote,
  handleTogglePin,
  handleSetColor
) {
  return notes.map((note) => (
    <Note
      key={note.id}
      id={note.id}
      text={note.text}
      date={note.date}
      deleted={note.deleted}
      pinned={note.pinned}
      color={note.color}
      handleDeleteNote={handleDeleteNote}
      handleUpdateNote={handleUpdateNote}
      handleRestoreNote={handleRestoreNote}
      handleTogglePin={handleTogglePin}
      handleSetColor={handleSetColor}
    />
  ));
}

function NoteList({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleUpdateNote,
  handleRestoreNote,
  handleTogglePin,
  handleSetColor,
  trashBinMode
}) {
  const pinnedNotes = !trashBinMode ? notes.filter((note) => note.pinned) : [];
  const otherNotes = !trashBinMode
    ? notes.filter((note) => !note.pinned)
    : notes;

  if (trashBinMode && notes.length === 0) {
    return (
      <div className="empty-state">
        <p>La papelera está vacía</p>
        <small>Las notas eliminadas aparecerán aquí</small>
      </div>
    );
  }

  return (
    <div>
      {!trashBinMode && <AddNote handleAddNote={handleAddNote} />}

      {!trashBinMode && notes.length === 0 && (
        <div className="empty-state">
          <p>Aún no tienes notas</p>
          <small>Las notas que crees aparecerán aquí</small>
        </div>
      )}

      {!trashBinMode && pinnedNotes.length > 0 && (
        <>
          <h2 className="section-title">FIJADAS</h2>
          <div className="notes-list">
            {renderNotes(
              pinnedNotes,
              handleDeleteNote,
              handleUpdateNote,
              handleRestoreNote,
              handleTogglePin,
              handleSetColor
            )}
          </div>
        </>
      )}

      {!trashBinMode && pinnedNotes.length > 0 && otherNotes.length > 0 && (
        <h2 className="section-title">OTRAS</h2>
      )}

      {otherNotes.length > 0 && (
        <div className="notes-list">
          {renderNotes(
            otherNotes,
            handleDeleteNote,
            handleUpdateNote,
            handleRestoreNote,
            handleTogglePin,
            handleSetColor
          )}
        </div>
      )}
    </div>
  );
}

export default NoteList;
