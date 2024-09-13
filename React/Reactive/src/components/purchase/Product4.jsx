import purchase4 from './../../assets/purchase4.jpg';

const Product4 = () => {
    return (
        <div className="col-12 col-sm-6 col-lg-3 ps-sm-2 mb-3">
            <div className="card p-0">
                <img src={purchase4} className="card-img-top" alt="purchase4" />
                <div className="card-body">
                    <p>Kettlebell / 3kg</p>
                    <p className="price"><span>89.99$</span> / 59.99$</p>
                </div>
                <div className="card-footer">
                    <i className="bi bi-cart-fill"></i>
                    Add To Cart
                </div>
            </div>
        </div>
    )
}

export default Product4