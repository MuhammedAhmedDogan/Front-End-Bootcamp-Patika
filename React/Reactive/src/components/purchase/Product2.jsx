import purchase2 from './../../assets/purchase2.jpg';

const Product2 = () => {
    return (
        <div className="col-12 col-sm-6 col-lg-3 px-sm-2 mb-3">
            <div className="card p-0">
                <img src={purchase2} className="card-img-top" alt="purchase2" />
                <div className="card-body">
                    <p>Treadmill</p>
                    <p className="price"><span>899.999$</span> / 599.999$</p>
                </div>
                <div className="card-footer">
                    <i className="bi bi-cart-fill"></i>
                    Add To Cart
                </div>
            </div>
        </div>
    )
}

export default Product2