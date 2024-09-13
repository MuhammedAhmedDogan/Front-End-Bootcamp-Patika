import trainer3Img from './../../assets/trainer3.jpg';

const Trainer3 = () => {
    return (
        <div className="trainer col-12 col-sm-4 mb-5 mb-sm-4">
            <div className="img-frame">
                <img src={trainer3Img} alt="trainer2" className="col-12" />
                <div className="trainer-name">
                    <h4>Jane Doe</h4>
                    <p>Cardio Trainer</p>
                </div>
                <div className="frame"></div>
            </div>
        </div>
    )
}

export default Trainer3