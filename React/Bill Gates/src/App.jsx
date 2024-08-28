import { useState } from 'react'
import './App.css'
import data from './data/data'
import Products from './components/products';

function App() {

  const [wallet, setWallet] = useState(100000000000);

  return (
    <>
      <div className='container'>
        <div className='wallet'><h1>${wallet}</h1></div>
        <Products />
      </div>

    </>
  )
}

export default App
