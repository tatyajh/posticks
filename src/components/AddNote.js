import React from 'react';
import { useState } from 'react';
import { IoSave } from "react-icons/io5";

function AddNote({ handleAddNote}) {
    const [noteText, setNoteText ] = useState('');
    
    const characterLimit = 250;

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
               placeholder='Type to add a new quote...'
               value= {noteText}
               onChange={handleChange}
            ></textarea>
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining</small>
                <IoSave onClick={ handSaveClick}
                className='save'
                size='1.5em'/>
             
            </div>
        </div>
    );
}

export default AddNote;