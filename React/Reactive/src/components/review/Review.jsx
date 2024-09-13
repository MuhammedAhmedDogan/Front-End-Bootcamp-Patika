import Client1 from './Client1'
import Client2 from './Client2'
import ReviewHeader from './ReviewHeader'

const Review = () => {
    return (
        <section id="review">
            <div className="container col-sm-9 px-3">
                <ReviewHeader />
                <div className="row">
                    <Client1 />
                    <Client2 />
                </div>
            </div>
        </section>
    )
}

export default Review