/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'
import data from './data/data'
import Products from './components/products';
import Receipt from './components/receipt';
import billGatesImage from './assets/images/billgates.jpg';

function App() {

  const [products, setProducts] = useState(data);
  const [wallet, setWallet] = useState(100_000_000_000);
  const [targetWallet, setTargetWallet] = useState(100_000_000_000);

  useEffect(() => {
    setTargetWallet(100_000_000_000 - products?.reduce((acc, item) => acc + (item.count * item.price), 0))
  }, [products]);

  useEffect(() => {
    if (wallet !== targetWallet) {
      const interval = setInterval(() => {
        setWallet(prevWallet => {
          const difference = prevWallet - targetWallet;
          const step = Math.ceil(Math.abs(difference) / 30);
          
          if (difference > 0) {
            return prevWallet - step >= targetWallet ? prevWallet - step : targetWallet;
          } else {
            return prevWallet + step <= targetWallet ? prevWallet + step : targetWallet;
          }
        });
      }, 2);
      return () => clearInterval(interval);
    }
  }, [targetWallet]);

  return (
    <>
      <div className='container'>
        <div className='header'>
          <img src={billGatesImage} alt="billgates" />
          <h1>Spend Bill Gates Money</h1>
        </div>
        <div className='wallet'><h1>${wallet.toLocaleString('en-US')}</h1></div>
        <Products products={products} setProducts={setProducts} wallet={targetWallet} />
        <Receipt products={products} wallet={wallet} targetWallet={targetWallet} />
      </div>

    </>
  )
}

export default App
