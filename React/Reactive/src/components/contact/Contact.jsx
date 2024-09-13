import Appointment from "./Appointment"
import ContactHeader from "./ContactHeader"
import Map from "./Map"

const Contact = () => {
    return (
        <section id="contact-us">
            <div className="container col-sm-9 px-3">
                <ContactHeader />
                <div className="row mt-4">
                    <Appointment />
                    <Map />
                </div>
            </div>
        </section>
    )
}

export default Contact