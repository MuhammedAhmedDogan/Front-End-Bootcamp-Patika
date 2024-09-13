
const Appointment = () => {
    return (
        <div className="appointment col-sm-6 px-4 mb-4">
            <div className="row">
                <div className="phone col-6 p-0">
                    <h4>Mobile Number</h4>
                    <span>+135 773 321 4442</span>
                </div>
                <div className="address col-6 p-0">
                    <h4>Email Address</h4>
                    <span>demo@demo.com</span>
                </div>
            </div>
            <h3 className="py-4 m-0">Make An Appointment</h3>
            <form action="/submit" method="post">
                <input type="text" id="name" name="name" placeholder="Your Name" autoComplete="name" />
                <input type="email" id="email" name="email" placeholder="Your Email" autoComplete="email" />
                <textarea id="message" name="message" rows="4" placeholder="Your Message" autoComplete="on"></textarea>
            </form>
        </div>
    )
}

export default Appointment