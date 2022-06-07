import  React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { AiTwotoneEdit } from "react-icons/ai";

function Note({ id, text, date, handleDeleteNote, handleUpdateNote}) {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className='note-footer'>
                <small>{date}</small>
               
                <AiTwotoneEdit onClick={() => handleUpdateNote(id)}
                className='update-icon' 
                size='1.7em' />
                
                <MdDeleteForever onClick={() => handleDeleteNote(id)}
                className='delete-icon' 
                size='1.7em' />

               
            </div>
        </div>

    );}

export default Note;