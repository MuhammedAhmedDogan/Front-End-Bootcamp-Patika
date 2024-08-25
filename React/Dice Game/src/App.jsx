import { useState } from 'react';
import background from './assets/Dice.png';
import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';
import './App.css';

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [player1Dice, setPlayer1Dice] = useState(null);
  const [player2Dice, setPlayer2Dice] = useState(null);
  const [winner, setWinner] = useState(null);
  const [name, setName] = useState('Player 1');
  const [inputValue, setInputValue] = useState("");
  const [isOnClick, setIsOnClick] = useState(false);

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function handleClick() {
    if (isDisabled) return;
    setIsDisabled(true);
    setWinner('Waiting...');

    for (let i = 0; i < 10; i++) {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;

      setPlayer1Dice(dice1);
      setPlayer2Dice(dice2);

      const diceImg1 = document.getElementById(1);
      const diceImg2 = document.getElementById(2);

      if (diceImg1 && diceImg2) {
        diceImg1.style.boxShadow = '0 0 30px rgba(255, 100, 100, 0.3)';
        diceImg2.style.boxShadow = '0 0 30px rgba(255, 100, 100, 0.3)';
      }
      await wait(80);
      if (diceImg1 && diceImg2) {
        diceImg1.style.boxShadow = 'none';
        diceImg2.style.boxShadow = 'none';
      }
      await wait(220);

      if (i === 9) {
        if (dice1 === dice2) {
          setWinner('Draw!');
        } else {
          setWinner(dice1 > dice2 ? `${name} Wins!` : 'Player 2 Wins!');
        }
      }
    }
    setIsDisabled(false);
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue) {
      setName(inputValue);
      setInputValue("");
      setIsOnClick(false);
    }
  };

  const diceImages = [null, dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <>
      <div className='page'>
        <img className='background' src={background} alt="background" />

        {/* Dice Images */}
        {player1Dice && (
          <img id='1' className='player1Dice' src={diceImages[player1Dice]} alt={`Player 1 Dice ${player1Dice}`} />
        )}
        {player2Dice && (
          <img id='2' className='player2Dice' src={diceImages[player2Dice]} alt={`Player 2 Dice ${player2Dice}`} />
        )}

        {/* Roll Button */}
        <button className={isDisabled ? 'buttonDisabled' : 'button'} onClick={handleClick} disabled={isDisabled}>
          {isDisabled ? 'ROLLING...' : 'ROLL'}
        </button>

        {/* Winner */}
        <h1 className='result'>{winner}</h1>

        <div className='player1'>
          {isOnClick ? (<input onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} type="text" placeholder="Enter your name here"/>) : (<h1 onClick={()=>{setIsOnClick(true)}}>{name}</h1>)}
        </div>
      </div>
    </>
  );
}

export default App;
