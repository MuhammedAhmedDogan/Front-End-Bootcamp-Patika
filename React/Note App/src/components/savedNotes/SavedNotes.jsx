import PropTypes from 'prop-types';
import './SavedNotes.css'

function SavedNotes({ notes }) {
  return (
    <div className='note-cards-container'>
      {notes.map(item => (
        <div key={item.id} className={`note-card ${item.color}-card`}>
          <h4>{item.note}</h4>
        </div>
      ))}
    </div>
  )
}

SavedNotes.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default SavedNotes