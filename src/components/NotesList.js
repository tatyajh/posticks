import * as React from 'react';
import Note from './Note';

const NoteList = () => {
    return (
        <div className ='sticky-notes'>
            <Note />
            <Note />

        </div>
    );
};

export default NoteList;