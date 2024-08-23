import { useState } from 'react'
import background from './assets/Dice.png'
import dice1 from './assets/images/dice1.png'
import dice2 from './assets/images/dice2.png'
import dice3 from './assets/images/dice3.png'
import dice4 from './assets/images/dice4.png'
import dice5 from './assets/images/dice5.png'
import dice6 from './assets/images/dice6.png'
import diceButton from './assets/images/button.png'

import './App.css'

function App() {

  return (
    <>
      <div className='page'>
        <img className='background' src={background} alt="background" />

        {/* Zar Görselleri */}
        <img className='player1Dice' src={dice1} alt="dice1" />
        <img className='player1Dice' src={dice2} alt="dice2" />
        <img className='player1Dice' src={dice3} alt="dice3" />
        <img className='player1Dice' src={dice4} alt="dice4" />
        <img className='player1Dice' src={dice5} alt="dice5" />
        <img className='player1Dice' src={dice6} alt="dice6" />

        <img className='player2Dice' src={dice1} alt="dice1" />
        <img className='player2Dice' src={dice2} alt="dice2" />
        <img className='player2Dice' src={dice3} alt="dice3" />
        <img className='player2Dice' src={dice4} alt="dice4" />
        <img className='player2Dice' src={dice5} alt="dice5" />
        <img className='player2Dice' src={dice6} alt="dice6" />

        {/* Zar Atma Butonu */}
        <button className='button'>
          <img src={diceButton} alt="button" />
        </button>
      </div>

    </>
  )
}

export default App
