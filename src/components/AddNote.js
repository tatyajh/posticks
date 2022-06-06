import React from 'react';
import { useState } from 'react';

function AddNote({ handleAddNote}) {
    const [noteText, setNoteText ] = useState('');
    
    const characterLimit = 100;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
        
    };

    const handSaveClick = () => {
        if (noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');  
        }      
    }

    return (
        <div className='note-new'>
            <textarea
               placeholder='Type note...'
               value= {noteText}
               onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className='save save-green save-green:hover' onClick={handSaveClick}>SAVE</button>
            </div>
        </div>
    );
}

export default AddNote;