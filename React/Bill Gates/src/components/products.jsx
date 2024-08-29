/* eslint-disable react/prop-types */
import './products.css'

function Products({ products, setProducts, wallet }) {

    const handleChange = (e, id) => {
        const updatedProducts = products.map(item => {
            if (item.id === id) {
                let isWalletNegative = (wallet + (item.price * item.count) - (item.price * Number(e.target.value))) < 0;
                return isWalletNegative ? item : { ...item, count: Number(e.target.value) };
            }
            return item;
        });
        setProducts(updatedProducts);
    };

    const handleBuyBtn = (id) => {
        const updatedProducts = products.map(item => {
            if (item.id === id) {
                return { ...item, count: Number(item.count + 1) };
            }
            return item;
        });
        setProducts(updatedProducts);
    };

    const handleSellBtn = (id) => {
        const updatedProducts = products.map(item => {
            if (item.id === id) {
                return { ...item, count: Number(item.count - 1) };
            }
            return item;
        });
        setProducts(updatedProducts);
    };

    return (
        <div className='all-products'>
            {products.map(item => (

                <div key={item.id} className='product'>
                    <div className='product-top'>
                        <img src={item.img} alt={item.title} />
                        <h2>{item.title}</h2>
                        <h3 className='price'>${(item.price).toLocaleString('en-US')}</h3>
                    </div>

                    <div className='product-bottom'>
                        <button className={item.count > 0 ? 'sell-btn' : 'disabled-btn'} onClick={() => handleSellBtn(item.id)} disabled={item.count < 1}>Sell</button>
                        <input type="number" value={item.count} onChange={(e) => handleChange(e, item.id)} />
                        <button className={wallet < item.price ? 'disabled-btn' : 'buy-btn'} onClick={() => handleBuyBtn(item.id)} disabled={wallet < item.price}>Buy</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products