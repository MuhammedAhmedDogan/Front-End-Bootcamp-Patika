import { useEffect, useState } from 'react';
import TextArea from './components/textArea/TextArea';
import Buttons from './components/buttons/Buttons';
import SavedNotes from './components/savedNotes/SavedNotes';
import './App.css';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(0);
  const [selectedColor, setSelectedColor] = useState('red');
  const [showAlert, setShowAlert] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [showUpdatedMessage, setShowUpdatedMessage] = useState(false);
  const [showDeletedMessage, setShowDeletedMessage] = useState(false);

  const saveNote = () => {
    setShowAlert(false);
    if (selectedId === 0) {
      if (note.trim() !== '') {
        const maxId = notes.length ? notes.reduce((max, item) => item.id > max ? item.id : max, notes[0].id) : 0;
        const newNote = { id: maxId + 1, note: note, color: selectedColor };
        setNotes(prevNotes => [...prevNotes, newNote]);
        setNote('');
        setShowAddedMessage(true);
        setTimeout(() => {
          setShowAddedMessage(false);
        }, 2000);
      } else {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      }
    } else {
      if (note.trim() === '') {
        setNotes(prevNotes => prevNotes.filter(item => item.id !== selectedId));
        setNote('');
        setSelectedId(0);
        setShowDeletedMessage(true);
        setTimeout(() => {
          setShowDeletedMessage(false);
        }, 2000);
      } else {
        setNotes(prevNotes => prevNotes.map(item => item.id === selectedId ? { ...item, note: note, color: selectedColor } : item));
        setNote('');
        setSelectedId(0);
        setShowUpdatedMessage(true);
        setTimeout(() => {
          setShowUpdatedMessage(false);
        }, 2000);
      }
    }
  };


  useEffect(() => {
    setFilteredNotes(notes.filter(item => item.note.includes(search)));
  }, [search, notes])

  useEffect(() => {
    if (selectedId !== 0) {
      const selectedNote = notes.find(item => item.id === selectedId);
      setNote(selectedNote.note);
      setSelectedColor(selectedNote.color);
    }
  }, [selectedId, notes])

  return (
    <>
      <div className='container-top'>
        <h1 className='title'>NotesApp</h1>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder='Search...' />
        <TextArea note={note} setNote={setNote} />
        <Buttons selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <button className='add-btn' onClick={saveNote}>{selectedId === 0 ? 'ADD' : (note.trim() === '' ? 'DELETE' : 'SAVE')}</button>
        <h3 className={`alert ${showAlert ? 'show' : ''}`}>Please fill out the note field to save your note!</h3>
        <h3 className={`alert ${showAddedMessage ? 'show' : ''}`}>Note added successfully!</h3>
        <h3 className={`alert ${showUpdatedMessage ? 'show' : ''}`}>Note updated successfully!</h3>
        <h3 className={`alert ${showDeletedMessage ? 'show' : ''}`}>Note deleted!</h3>
      </div>
      <div className='container-bottom'>
        <SavedNotes notes={search ? filteredNotes : notes} setSelectedId={setSelectedId} />
      </div>
    </>
  )
}

export default App
