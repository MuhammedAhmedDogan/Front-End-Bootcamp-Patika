import { useState } from 'react';
import TextArea from './components/textArea/TextArea';
import Buttons from './components/buttons/Buttons';
import SavedNotes from './components/savedNotes/SavedNotes';
import './App.css';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedColor, setSelectedColor] = useState('red');
  const [showAlert, setShowAlert] = useState(false);

  const saveNote = () => {
    setShowAlert(false);
    if (note.trim() !== '') {
      const newNote = { id: notes.length + 1, note: note, color: selectedColor };
      setNotes(prevNotes => [...prevNotes, newNote]);
      setNote('');
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className='container-top'>
        <h1 className='title'>NotesApp</h1>
        <input value={search} onChange={(e) => (setSearch(e.target.value))} type="text" name="search" id="search" placeholder='Search...' />
        <TextArea note={note} setNote={setNote} />
        <Buttons selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <button className='add-btn' onClick={saveNote}>ADD</button>
        <h3 className={`alert ${showAlert ? 'show' : ''}`}>Please fill out the note field to save your note.</h3>
      </div>
      <div className='container-bottom'>
        <SavedNotes notes={notes} />
      </div>
    </>
  )
}

export default App
