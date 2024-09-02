import { useEffect, useState } from 'react';
import data from './data/data';
import './App.css'

function App() {
  const [flippedCard1Id, setFlippedCard1Id] = useState(0);
  const [flippedCard2Id, setFlippedCard2Id] = useState(0);
  const [flippedControl, setFlippedControl] = useState(1);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [cards, setCards] = useState(data);

  // Fisher-Yates algoritması ile array'i karıştırma fonksiyonu
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // İlk ekran ilk yüklendiğinde kartları karıştır
  useEffect(() => {
    setCards((prevItems) => shuffleArray(prevItems));
  }, [])

  const handleClick = (item) => {
    if (flippedControl === 1) {
      setFlippedCard1Id(item.id);
      setFlippedControl(2);
    } else if (flippedControl === 2) {
      setFlippedControl(null);
      setFlippedCard2Id(item.id);
      if (cards.find(card => card.id === flippedCard1Id).name === item.name) {
        setTimeout(() => {
          setMatchedCards([...matchedCards, item.name]);
        }, 700);
        setTimeout(() => {
          setScore(prevScore => prevScore + 50);
        }, 1200);
      } else {
        setTimeout(() => {
          setScore(prevScore => prevScore - 10);
        }, 1200);
      }
      setTimeout(() => {
        setFlippedCard1Id(0);
        setFlippedCard2Id(0);
        setFlippedControl(1);
      }, 1000);
    }
  };

  const isMatched = (item) => {
    if (matchedCards.includes(item.name)) {
      return true;
    } else {
      return false
    }
  };

  useEffect(() => {
    if (matchedCards.length === cards.length / 2) {
      setIsGameOver(true);
    }
  }, [matchedCards, cards]);

  const handlePlayAgain = () => {
    setIsGameOver(false);
    setCards((prevItems) => shuffleArray(prevItems));
    setScore(0);
    setMatchedCards([]);
    setFlippedControl(1);
    setFlippedCard1Id(0);
    setFlippedCard2Id(0);
  };

  return (
    <div className='page'>
      <div className='container-top'>
        <h1 className='score'>SCORE {score}</h1>
        {isGameOver && <h1>Well Done!</h1>}
        {isGameOver && <button onClick={handlePlayAgain}>Play Again</button>}
      </div>
      <div className='container'>
        {cards.map(item => (
          <div key={item.id} className="scene">
            <div id={item.id}
              className={`card ${flippedCard2Id === item.id || flippedCard1Id === item.id ? 'is-flipped' : ''} ${isMatched(item) ? 'matched' : ''}`}
              onClick={() => handleClick(item)}>
              <div className="card-face card-front">?</div>
              <div className="card-face card-back"><img src={item.img} alt={item.name} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;