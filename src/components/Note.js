/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegSave, FaTrashRestore } from 'react-icons/fa';
import { MdOutlinePushPin, MdPushPin, MdOutlinePalette } from 'react-icons/md';

// Google Keep-style pastel palette. Older notes have no color field in the
// data model, so we deterministically derive a fallback color from the note
// id — this keeps existing notes looking fine while new notes can pick a
// color explicitly via the palette picker below.
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
  pinned,
  color,
  handleDeleteNote,
  handleUpdateNote,
  handleRestoreNote,
  handleTogglePin,
  handleSetColor
}) {
  const [editMode, setEditMode] = useState(false);
  const [noteText, setNoteText] = useState(text);
  const [showPalette, setShowPalette] = useState(false);

  const characterLimit = 250;
  const noteColor = color || colorForId(id);

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

  const PinIcon = pinned ? MdPushPin : MdOutlinePushPin;

  return (
    <div
      className={`note ${pinned ? 'note-pinned' : ''}`}
      style={{ backgroundColor: deleted ? '#e8eaed' : noteColor }}
    >
      {!deleted && (
        <div className="note-actions">
          <PinIcon
            onClick={() => handleTogglePin(id)}
            className={`pin-icon ${pinned ? 'pin-icon-active' : ''}`}
            size="1.2em"
            title={pinned ? 'Quitar de fijadas' : 'Fijar nota'}
          />
          <div className="palette-wrapper">
            <MdOutlinePalette
              onClick={() => setShowPalette((prev) => !prev)}
              className="palette-icon"
              size="1.2em"
              title="Cambiar color"
            />
            {showPalette && (
              <div className="palette-menu">
                {NOTE_COLORS.map((swatch) => (
                  <button
                    key={swatch}
                    type="button"
                    className={`palette-swatch ${
                      swatch === noteColor ? 'palette-swatch-active' : ''
                    }`}
                    style={{ backgroundColor: swatch }}
                    aria-label={`Color ${swatch}`}
                    onClick={() => {
                      handleSetColor(id, swatch);
                      setShowPalette(false);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {editMode ? (
        <textarea
          placeholder="Type to add a new quote..."
          value={noteText}
          onChange={handleChange}
        />
      ) : (
        <span className="note-text">{text}</span>
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
