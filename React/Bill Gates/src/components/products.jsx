import data from './../data/data'
import './products.css'

function Products() {

    const handleChange = () => {

    }
    return (
        <div className='all-products'>
            {data.map(item => (
                <div key={item.id} className='product'>
                    <div className='product-top'>
                        <img src={item.img} alt={item.title} />
                        <h2>{item.title}</h2>
                        <h3 className='price'>${item.price}</h3>
                    </div>

                    <div className='product-bottom'>
                        <button className='sell-btn'>Sell</button>
                        <input type="number" value={item.count} onChange={handleChange} />
                        <button className='buy-btn'>Buy</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products