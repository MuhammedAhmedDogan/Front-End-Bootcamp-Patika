import purchase1 from './../../assets/purchase1.jpg';

const Product1 = () => {
    return (
        <div className="col-12 col-sm-6 col-lg-3 pe-sm-2 mb-3">
            <div className="card p-0">
                <img src={purchase1} className="card-img-top" alt="purchase1" />
                <div className="card-body">
                    <p>Kettlebell / 5kg</p>
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

export default Product1