/* eslint-disable react/prop-types */
import './receipt.css'

function Receipt({ products, wallet, targetWallet }) {
    const purchasedProducts = targetWallet === 100_000_000_000 ? [] : products.filter(item => item.count > 0);

    function formatNumber(num) {
        if (num >= 1_000_000_000) {
            let formattedNum = (num / 1_000_000_000).toFixed(1);
            if (formattedNum.endsWith('.0')) {
                formattedNum = formattedNum.slice(0, -2);
            }
            if (Number(formattedNum) >= 1_000) {
                return formatNumber(Number(formattedNum) * 1_000_000_000);
            }
            return formattedNum + 'b';
        } else if (num >= 1_000_000) {
            let formattedNum = (num / 1_000_000).toFixed(1);
            if (formattedNum.endsWith('.0')) {
                formattedNum = formattedNum.slice(0, -2);
            }
            if (Number(formattedNum) >= 1_000) {
                return formatNumber(Number(formattedNum) * 1_000_000);
            }
            return formattedNum + 'm';
        } else if (num >= 1_000) {
            let formattedNum = (num / 1_000).toFixed(1);
            if (formattedNum.endsWith('.0')) {
                formattedNum = formattedNum.slice(0, -2);
            }
            if (Number(formattedNum) >= 1_000) {
                return formatNumber(Number(formattedNum) * 1_000);
            }
            return formattedNum + 'k';
        } else {
            return num.toString();
        }
    }

    return (
        <div className={purchasedProducts.length ? 'receipt' : 'disabled-receipt'}>
            <div className='container'>
                <h1 className='title'>Your Receipt</h1>
                {purchasedProducts.map(item => (
                    <div className='product-list' key={item.id}>
                        <h3 className='product-name'>{item.title}</h3>
                        <h3 className='product-count'>x{formatNumber(item.count)}</h3>
                        <h3 className='product-price'>${formatNumber(item.count * item.price)}</h3>
                    </div>
                ))}
                <div className='receipt-bottom'>
                    <h2>Total</h2>
                    <h3 className='totalSpent'>${(100_000_000_000 - wallet).toLocaleString('en-US')}</h3>
                </div>
            </div>
        </div>
    )
}

export default Receipt