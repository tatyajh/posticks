import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { AiTwotoneEdit } from 'react-icons/ai';
import { IoSave } from 'react-icons/io5';
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
          <AiTwotoneEdit
            onClick={() => setEditMode((previousEditMode) => !previousEditMode)}
            className="update-icon"
            size="1.7em"
          />
        )}

        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.7em"
        />

        {editMode && (
          <IoSave onClick={handSaveClick} className="save" size="1.5em" />
        )}

        {deleted && (
          <FaTrashRestore
            onClick={() => handleRestoreNote(id)}
            className="save"
            size="1.3em"
          />
        )}
      </div>
    </div>
  );
}

export default Note;
