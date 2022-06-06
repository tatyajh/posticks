import  React from 'react';
import { MdDeleteForever } from 'react-icons/md';


const Note = () => {
    return (
        <div className='note'>
            <span>Hello! This is Our first sticky note yay!</span>
            <div className='note-footer'>
                <small>04/06/2022</small>
               <MdDeleteForever className='delete-icon' size='1.3em'/>
                 
           </div>                               
        </div>
       
    );
};

export default Note;