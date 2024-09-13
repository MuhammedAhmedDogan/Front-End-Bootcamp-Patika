import React from 'react'

const BmiInput = ({ heightValue, setHeightValue, weightValue, setWeightValue }) => {


    return (
        <div className="calculator col-sm-5 m-0 p-0">
            <h1 className="mb-4">BMI Calculator</h1>
            <p className="mb-4">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <p className="mb-4">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>

            <div id="inputs" className="row">
                <div className="cm col-8 col-sm-5 mb-1 m-sm-0 p-0">
                    <input
                        value={heightValue}
                        onChange={(e)=>setHeightValue(e.target.value)}
                        type="number"
                        id="height"
                        className="input"
                        name="height"
                        min="1"
                        max="250"
                        placeholder="Your Height"
                    />
                    <span>cm</span>
                </div>
                <div className="kg col-8 col-sm-5 p-0">
                    <input
                        value={weightValue}
                        onChange={(e)=>setWeightValue(e.target.value)}
                        type="number"
                        id="weight"
                        className="input"
                        name="weight"
                        min="1"
                        max="500"
                        placeholder="Your Weight"
                    />
                    <span>kg</span>
                </div>
            </div>
        </div>
    )
}

export default BmiInput