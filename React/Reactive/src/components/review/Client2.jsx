import client2Img from './../../assets/client2.jpg'

const Client2 = () => {
    return (
        <div className="client-card col-sm-6 p-0 ps-sm-5">
            <div className="client">
                <img src={client2Img} alt="client2" />
                <p>Cardio Trainer<br /><span>CEO</span></p>
            </div>
            <div className="wrapper">
                <p className="client-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur, tempore? Reprehenderit natus quos illo veritatis
                    tempore, nulla pariatur perferendis.
                </p>
                <div className="shadow-left"></div>
                <div className="shadow-right"></div>
            </div>
        </div>
    )
}

export default Client2