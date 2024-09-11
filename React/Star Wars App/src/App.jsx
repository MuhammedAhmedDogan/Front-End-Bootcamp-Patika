import { useState, useEffect } from 'react';
import fetchData from './services/starshipsDataService';
import Starships from './components/Starships';
import Search from './components/Search';
import starWarsLogo from './assets/star_wars_logo.png';
import './App.css'

function App() {
  const [starships, setStarships] = useState([]);
  const [counterShown, setCounterShown] = useState(1);
  const [starshipsShown, setStarshipsShown] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchData();
        setStarships(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error processing data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!isFiltered) {
      switch (counterShown) {
        case 1:
          setStarshipsShown(starships.slice(0, 10));
          break;
        case 2:
          setStarshipsShown(starships.slice(0, 20));
          break;
        case 3:
          setStarshipsShown(starships.slice(0, 30));
          break;
        case 4:
          setStarshipsShown(starships);
          break;
        default:
          break;
      }
    }
  }, [starships, counterShown, isFiltered]);

  const handleCounterShown = () => {
    if (counterShown < 4) {
      setCounterShown(prev => (prev + 1));
    }
  }

  return (
    <>
      <div className='home-page'>
        <img className='logo' src={starWarsLogo} alt="logo" />
        <Search starships={starships} setStarshipsShown={setStarshipsShown} setIsFiltered={setIsFiltered} />
        {isLoading ? <h1>Starships Loading...</h1> : <Starships starshipsShown={starshipsShown} />}
        {!isLoading && counterShown < 4 && !isFiltered && <p onClick={handleCounterShown} className='show-more'>Show more</p>}
      </div>
    </>
  )
}

export default App
