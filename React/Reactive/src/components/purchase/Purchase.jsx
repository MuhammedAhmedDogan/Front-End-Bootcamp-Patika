import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4';
import PurchaseHeader from './PurchaseHeader';

const Purchase = () => {
    return (
        <section id="purchase">
            <div className="container col-sm-9 px-3">
                <PurchaseHeader />
                <div className="row px-4 px-sm-0 mb-4">
                    <Product1 />
                    <Product2 />
                    <Product3 />
                    <Product4 />
                </div>
            </div>
        </section>
    )
}

export default Purchase