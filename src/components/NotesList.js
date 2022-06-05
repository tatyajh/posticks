import React from 'react';
import Note from './Note';

const NoteList = () => {
    return (
        <div class="flex flex-col space-y-4 ...">
            <Note />
            <Note />
            <Note />
        </div>
       
    );
};

export default NoteList;