import React, { useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaRegSave } from 'react-icons/fa';
import { FaTrashRestore } from 'react-icons/fa';

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
    <div className="note">
      {editMode ? (
        <textarea
          placeholder="Type to add a new quote..."
          value={noteText}
          onChange={handleChange}
        ></textarea>
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
