import trainer1Img from './../../assets/trainer1.jpg';

const Trainer1 = () => {
    return (
        <div className="trainer col-12 col-sm-4 mb-5 mb-sm-4">
            <div className="img-frame">
                <img src={trainer1Img} alt="trainer1" className="col-12" />
                <div className="trainer-name">
                    <h4>Jane Doe</h4>
                    <p>Yoga Trainer</p>
                </div>
                <div className="frame"></div>
            </div>
        </div>
    )
}

export default Trainer1