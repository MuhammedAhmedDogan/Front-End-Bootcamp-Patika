import PropTypes from 'prop-types';
import './TextAreaStyles.css'

function TextArea({ note, setNote }) {

    return (
        <div className='text-area'>
            <textarea
                value={note}
                onChange={(e)=> (setNote(e.target.value))}
                rows="15"
                cols="75"
                placeholder="Enter your note here..."
            />
        </div>
    )
}

TextArea.propTypes = {
    note: PropTypes.string.isRequired,
    setNote: PropTypes.func.isRequired
};

export default TextArea