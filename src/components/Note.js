/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegSave, FaTrashRestore } from 'react-icons/fa';

// Google Keep-style pastel palette. Notes have no color field in the data
// model, so we deterministically derive a color from the note id — this is
// purely presentational and does not touch app state/logic.
const NOTE_COLORS = [
  '#faf7b7', // yellow
  '#fdd663', // amber
  '#fbbc9a', // orange
  '#f9a8b4', // pink/red
  '#e6c9f9', // purple
  '#aecbfa', // blue
  '#a7ffeb', // teal
  '#ccff90', // green
  '#e8eaed' // gray
];

function colorForId(id) {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) {
    hash = Math.abs(hash * 31 + id.charCodeAt(i));
  }
  return NOTE_COLORS[hash % NOTE_COLORS.length];
}

function Note({
  id,
  text,
  date,
  deleted,
  handleDeleteNote,
  handleUpdateNote,
  handleRestoreNote
}) {
  const [editMode, setEditMode] = useState(false);
  const [noteText, setNoteText] = useState(text);

  const characterLimit = 250;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleUpdateNote({ id, text: noteText });
      setEditMode(false);
    }
  };

  return (
    <div
      className="note"
      style={{ backgroundColor: deleted ? '#e8eaed' : colorForId(id) }}
    >
      {editMode ? (
        <textarea
          placeholder="Type to add a new quote..."
          value={noteText}
          onChange={handleChange}
        />
      ) : (
        <span>{text}</span>
      )}

      <div className="note-footer">
        <small>{date}</small>

        {!deleted && (
          <AiOutlineEdit
            onClick={() => setEditMode((previousEditMode) => !previousEditMode)}
            className="update-icon"
            size="1.3em"
          />
        )}

        <TiDeleteOutline
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />

        {editMode && (
          <FaRegSave onClick={handSaveClick} className="save" size="1.5em" />
        )}

        {deleted && (
          <FaTrashRestore
            onClick={() => handleRestoreNote(id)}
            className="save"
            size="1em"
          />
        )}
      </div>
    </div>
  );
}

export default Note;
