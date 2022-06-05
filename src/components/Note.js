import  React from 'react';
import { MdDeleteForever } from 'react-icons/md';


const Note = () => {
    return (
        <div className='note'>
            <span>Hello! This is Our first sticky note yay!</span>
            <div className='container mx-auto'>
                <small>04/06/2022</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
                <button className="btn btn-blue btn-blue:hover">Botón</button>
                
           </div>                               
        </div>
       
    );
};

export default Note;