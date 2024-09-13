import trainer2Img from './../../assets/trainer2.jpg';

const Trainer2 = () => {
    return (
        <div className="trainer col-12 col-sm-4 mb-5 mb-sm-4">
            <div className="img-frame">
                <img src={trainer2Img} alt="trainer2" className="col-12" />
                <div className="trainer-name">
                    <h4>John Doe</h4>
                    <p>Fitness Trainer</p>
                </div>
                <div className="frame"></div>
            </div>
        </div>
    )
}

export default Trainer2