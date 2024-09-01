import PropTypes from 'prop-types';
import './SavedNotes.css'

function SavedNotes({ notes, setSelectedId }) {

  function handleClickNote(e) {
    setSelectedId(Number(e.currentTarget.id));
  }
  
  return (
    <div className='note-cards-container'>
      {notes.map(item => (
        <div key={item.id} id={item.id} className={`note-card ${item.color}-card`} onClick={(e) => handleClickNote(e)}>
          <h4>{item.note}</h4>
        </div>
      ))}
    </div>
  )
}

SavedNotes.propTypes = {
  notes: PropTypes.array.isRequired,
  setSelectedId: PropTypes.func.isRequired
};

export default SavedNotes