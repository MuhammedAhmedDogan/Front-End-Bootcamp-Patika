import { useEffect, useState } from 'react'
import './App.css'
import data from './data/data'
import Products from './components/products';

function App() {

  const [products, setProducts] = useState(data);
  const [wallet, setWallet] = useState(100000000000);

  function amountSpent() {
    return products?.reduce((acc, item) => acc + (item.count * item.price), 0);
  }

  useEffect(() => {
    setWallet(100000000000 - amountSpent())
  }, [products]);

  return (
    <>
      <div className='container'>
        <div className='wallet'><h1>${wallet}</h1></div>
        <Products products={products} setProducts={setProducts} wallet={wallet} />
      </div>

    </>
  )
}

export default App
