import React, { useEffect, useRef } from 'react';
import bmiImg from './../../assets/bmi-index.jpg';

const BmiResult = ({ heightValue, weightValue }) => {
    const cursorRef = useRef(null);

    function bmiCalc() {
        var heightCm = parseFloat(heightValue);
        var weightKg = parseFloat(weightValue);
        if (heightCm > 0 && weightKg > 0) {
            var bmi = weightKg / ((heightCm / 100) * (heightCm / 100));

            if (10 <= bmi && bmi < 18.5) {
                var magnificationCoefficient = (bmi - 10) / (18.5 - 10);
                var cursorPositionPercentage = 6 + (22 - 6) * magnificationCoefficient
                cursorRef.current.style.left = cursorPositionPercentage + '%';
            } else if (18.5 <= bmi && bmi < 25) {
                var magnificationCoefficient = (bmi - 18.5) / (25 - 18.5);
                var cursorPositionPercentage = 23 + (38.5 - 23) * magnificationCoefficient
                cursorRef.current.style.left = cursorPositionPercentage + '%';
            } else if (25 <= bmi && bmi < 30) {
                var magnificationCoefficient = (bmi - 25) / (30 - 25);
                var cursorPositionPercentage = 39.5 + (55 - 39.5) * magnificationCoefficient
                cursorRef.current.style.left = cursorPositionPercentage + '%';
            } else if (30 <= bmi && bmi < 35) {
                var magnificationCoefficient = (bmi - 30) / (35 - 30);
                var cursorPositionPercentage = 55.5 + (71 - 55.5) * magnificationCoefficient
                cursorRef.current.style.left = cursorPositionPercentage + '%';
            } else if (35 <= bmi && bmi <= 50) {
                var magnificationCoefficient = (bmi - 35) / (50 - 35);
                var cursorPositionPercentage = 72 + (88 - 72) * magnificationCoefficient
                cursorRef.current.style.left = cursorPositionPercentage + '%';
            } else if (bmi > 50) {
                cursorRef.current.style.left = '88%';
            } else {
                cursorRef.current.style.left = '6%';
            }
        }
    }

    useEffect(() => {
        bmiCalc();
    }, [heightValue, weightValue])

    return (
        <div className="index col-sm-6 mt-4 m-sm-0 p-0">
            <h3>Your BMI</h3>
            <div id="bmi-index-img">
                <img src={bmiImg} alt="bmi-index" className="col-12" />
                <div id="cursor" ref={cursorRef}></div>
            </div>
        </div>
    )
}

export default BmiResult