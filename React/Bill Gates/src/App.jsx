import { useEffect, useState } from 'react'
import './App.css'
import data from './data/data'
import Products from './components/products';
import Receipt from './components/receipt';

function App() {

  const [products, setProducts] = useState(data);
  const [wallet, setWallet] = useState(100_000_000_000);

  useEffect(() => {
    setWallet(100_000_000_000 - products?.reduce((acc, item) => acc + (item.count * item.price), 0))
  }, [products]);

  return (
    <>
      <div className='container'>
        <div className='wallet'><h1>${wallet.toLocaleString('en-US')}</h1></div>
        <Products products={products} setProducts={setProducts} wallet={wallet} />
        <Receipt products={products} wallet={wallet} />
      </div>

    </>
  )
}

export default App
