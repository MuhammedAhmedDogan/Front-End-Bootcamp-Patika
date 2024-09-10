import { useState, useEffect } from 'react';
import fetchData from './services/starshipsDataService';
import Starships from './components/Starships';
import './App.css'

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setStarships(result);
      } catch (error) {
        console.error("Error processing data:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Starships starships={starships} />
    </>
  )
}

export default App
