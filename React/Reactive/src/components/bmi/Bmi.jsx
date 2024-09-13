import { useState } from "react";
import BmiInput from "./BmiInput";
import BmiResult from "./BmiResult";

const Bmi = () => {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');

    return (
        <section id="bmi">
            <div className="container col-sm-10 px-3">
                <div className="row">
                    <BmiInput heightValue={heightValue} setHeightValue={setHeightValue}
                        weightValue={weightValue} setWeightValue={setWeightValue} />
                    <BmiResult heightValue={heightValue} weightValue={weightValue} />
                </div>
            </div>
        </section>
    )
}

export default Bmi