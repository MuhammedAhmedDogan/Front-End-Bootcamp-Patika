import purchase3 from './../../assets/purchase3.jpg';

const Product3 = () => {
    return (
        <div className="col-12 col-sm-6 col-lg-3 px-sm-2 mb-3">
            <div className="card p-0">
                <img src={purchase3} className="card-img-top" alt="purchase3" />
                <div className="card-body">
                    <p>Adjustable Dumbbell</p>
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

export default Product3