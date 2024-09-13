const HeroTop = () => {
  return (
    <section id="hero-top">
        <div className="container col-sm-9 px-3">
            <div id="powerfull-btn" className="btn btn-lg">
                POWERFULL
            </div>
            <h1 className="display-1">Group<br />Practice<br />With Trainer</h1>
            <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quia ipsam optio a quae corporis!
                Reiciendis adipisci provident sed a numquam maiores quisquam accusantium facilis totam, autem fugit
                voluptas vitae.</h3>
            <div className="row gap-2">
                <button id="signup-btn" className="col-12 col-sm-5 col-md-4 col-lg-2 btn btn-large me-5">Sign Up</button>
                <button id="details-btn" className="col-12 col-sm-5 col-md-4 col-lg-2 btn btn-large">Details</button>
            </div>
        </div>
    </section>
  )
}

export default HeroTop