import starshipImage from './../assets/starship-image.jpg';

const Starships = ({ starshipsShown }) => {
    return (
        <div className="starships-container">
            {starshipsShown.map((starship, index) => (
                <div key={index} className="starship-card">
                    <img src={starshipImage} alt="starship" />
                    <h3>{starship.name}</h3>
                    <p><span>Model:</span> {starship.model}</p>
                    <p><span>Hyperdrive Rating:</span> {starship.hyperdrive_rating}</p>
                </div>
            ))}
        </div>
    )
}

export default Starships