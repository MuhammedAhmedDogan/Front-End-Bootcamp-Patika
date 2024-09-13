import TrainersHeader from "./TrainersHeader";
import Trainer1 from "./Trainer1";
import Trainer2 from "./Trainer2";
import Trainer3 from "./Trainer3";

const Trainers = () => {
    return (
        <section id="trainers">
            <div className="container col-sm-9 px-3">
                <TrainersHeader />
                <div className="trainers row px-3 px-sm-0">
                    <Trainer1 />
                    <Trainer2 />
                    <Trainer3 />
                </div>
            </div>
        </section>
    )
}

export default Trainers