/* eslint-disable react/prop-types */
import './products.css'

function Products({ products, setProducts, wallet }) {



    const handleChange = (e, id) => {
        const updatedProducts = products.map(item => {
            if (item.id === id) {
                return { ...item, count: Number(e.target.value) };
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
                        <h3 className='price'>${item.price}</h3>
                    </div>

                    <div className='product-bottom'>
                        <button className={item.count > 0 ? 'sell-btn' : 'disabled-btn'}>Sell</button>
                        <input type="number" value={item.count} onChange={(e) => handleChange(e, item.id)} />
                        <button className={wallet < item.price ? 'disabled-btn' : 'buy-btn'}>Buy</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products