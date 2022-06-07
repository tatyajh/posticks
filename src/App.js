import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'First quote!',
			date: '10/04/2020',
		},
		{
			id: nanoid(),
			text: 'Second note!',
			date: '21/10/2021',
		},
		{
			id: nanoid(),
			text: 'Lastest Sticky!',
			date: '01/06/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('posticks-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);
	

	useEffect(() => {
		localStorage.setItem(
			'posticks-data',
			JSON.stringify(notes)
			);
		}, [notes]);
	
	
		
	function addNote(text) {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	}

	function updateNote (text){
		const edit = {
			
		}

	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					handleUpdateNote={updateNote}
					/>
			</div>
		</div>
	);
}

export default App;

