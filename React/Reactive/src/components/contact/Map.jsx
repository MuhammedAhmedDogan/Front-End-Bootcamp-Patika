
const Map = () => {
    return (
        <div className="map col-sm-6 px-4 mb-4">
            <iframe
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909.2276002831502!2d32.71118468964831!3d39.95782932939999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337d0a0e0915b%3A0xf218e02bce5bf7bd!2sErgazi%2C%201830.%20Sk.%2071%20B%2C%2006370%20Yenimahalle%2FAnkara!5e0!3m2!1str!2str!4v1719532370810!5m2!1str!2str"}
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default Map