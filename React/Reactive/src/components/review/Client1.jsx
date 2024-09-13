import client1Img from './../../assets/client1.jpg'

const Client1 = () => {
    return (
        <div className="client-card col-sm-6 p-0 pe-sm-5">
            <div className="client">
                <img src={client1Img} alt="client1" />
                <p>Diet Expert<br /><span>CFO</span></p>
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

export default Client1