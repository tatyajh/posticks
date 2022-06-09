/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaRegSave } from 'react-icons/fa';

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('');

  const characterLimit = 250;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="note-new">
      <textarea
        placeholder="Type to add a new quote..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <FaRegSave onClick={handSaveClick} className="save" size="1.2em" />
      </div>
    </div>
  );
}

export default AddNote;
