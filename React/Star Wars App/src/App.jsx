import { useState, useEffect } from 'react';
import fetchData from './services/starshipsDataService';
import Starships from './components/Starships';
import Search from './components/Search';
import StarshipDetails from './components/StarshipDetails';
import starWarsLogo from './assets/star_wars_logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [counter, setCounter] = useState(1);
  const [starshipsShown, setStarshipsShown] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData();
        const starShipsWithIds = data.map((item, index) => ({ ...item, id: index + 1 }))
        setStarships(starShipsWithIds);
        setIsLoading(false);
      } catch (error) {
        console.error("Error processing data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!isFiltered) {
      switch (counter) {
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
  }, [starships, counter, isFiltered]);

  const handleCounter = () => {
    if (counter < 4) {
      setCounter(prev => (prev + 1));
    }
  }

  return (
    <Router>

      <Routes>
        <Route path="/" element={<div className='home-page'>
          <img className='logo' src={starWarsLogo} alt="logo" />
          <Search starships={starships} setStarshipsShown={setStarshipsShown} setIsFiltered={setIsFiltered} />
          {isLoading ? <h1>Starships Loading...</h1> : <Starships starshipsShown={starshipsShown} />}
          {!isLoading && counter < 4 && !isFiltered && <p onClick={handleCounter} className='show-more'>Show more</p>}
        </div>} />
        <Route path="/starship/:id" element={<StarshipDetails />} />
      </Routes>
    </Router>
  )
}

export default App
