import PropTypes from 'prop-types';
import './ButtonsStyles.css';

function Buttons({ selectedColor, setSelectedColor }) {
  return (
    <div className="buttons">
      <button onClick={() => setSelectedColor('red')} className='red-btn'>{selectedColor === 'red' ? '✓' : ''}</button>
      <button onClick={() => setSelectedColor('purple')} className='purple-btn'>{selectedColor === 'purple' ? '✓' : ''}</button>
      <button onClick={() => setSelectedColor('yellow')} className='yellow-btn'>{selectedColor === 'yellow' ? '✓' : ''}</button>
      <button onClick={() => setSelectedColor('blue')} className='blue-btn'>{selectedColor === 'blue' ? '✓' : ''}</button>
      <button onClick={() => setSelectedColor('green')} className='green-btn'>{selectedColor === 'green' ? '✓' : ''}</button>
    </div>
  )
}

Buttons.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  setSelectedColor: PropTypes.func.isRequired
};

export default Buttons