import React, { useState } from 'react';

import "../assets/css/calculator.css";
//import components
import InputButton from './buttons/InputButton';



function Calculator() {

    const [initialValue, setInitialValue] = useState("0");
    const [input, setInput] = useState("");

    const buttons = {
        numberButtons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."],
        operatorButtons: ["+", "-", "*", "/"]
    };

    function concatenateInput(number) {
        if (initialValue === "0") setInitialValue();
        setInput(input + number);
    }

    function result() {
        const FORMAT_ERROR = "Input format error, please try again with another input";
        const MATH_ERROR = "Math error, please try again with another input";
        try {
            // eslint-disable-next-line
            const value = String(eval(input)).includes(".") ? String(eval(input).toFixed(4)) : String(eval(input));

            if (value === "undefined") {
                //this means that there are only symbols in the input, eg. "*/+-"
                if (input.length > 0) alert(FORMAT_ERROR)
                //if the input length is equal to 0, it means that it will do nothing
                return;
            } else if (value === "Infinity" || isNaN(value)) {
                //the output "Infinity" is due to a division by zero
                //the output "NaN" is due to a 0/0 division
                alert(MATH_ERROR);
                return;
            }

            setInput(value);
        } catch (error) {
            alert(FORMAT_ERROR);
            console.log(error);
        }
    }

    function singleClear() {
        if (input.length > 1) {
            setInput(input.slice(0, -1));
        }
        if (input.length === 1) {
            setInput("0");
        }
    }

    function allClear() {
        setInitialValue("0");
        setInput("");
    }

    return (
        <div className="calculator">
            <h1 className="calculator-header">Amazing calculator</h1>
            <h1 className="calculator-screen">
                <bdi>
                    {initialValue} {input}
                </bdi>
            </h1>
            <div className="calculator-keys">
                {
                    //Add operators buttons
                    buttons.operatorButtons.map((operatorButton, index) => {
                        return (
                            <InputButton buttonStyle="operator" key={index} input={operatorButton} handleClick={operatorButton => { concatenateInput(operatorButton) }} />
                        );
                    })
                }

                {
                    //Add numbers buttons (including ".")
                    buttons.numberButtons.map((numberButton, index) => {
                        return (
                            <InputButton key={index} input={numberButton} handleClick={numberButton => { concatenateInput(numberButton) }} />
                        );
                    })
                }
                <InputButton buttonStyle="single-clear" input={"C"} handleClick={() => { singleClear() }} />
                <InputButton buttonStyle="all-clear" input={"AC"} handleClick={() => { allClear() }} />
                <InputButton buttonStyle="equal-sign" input={"="} handleClick={() => { result() }} />
            </div>
        </div>
    );

}

export default Calculator;