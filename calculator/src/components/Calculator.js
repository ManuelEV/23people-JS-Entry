import React, { useState } from 'react';


//import components
import InputButton from './buttons/InputButton';

function Calculator() {

    const [initialValue, setInitialValue] = useState('0');
    const [input, setInput] = useState('');

    const buttons = {
        numberButtons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."],
        operatorButtons: ["+", "-", "*", "/"],
        controlButtons: ["AC", "C"]
    };

    function concatenateInput(number) {
        if (initialValue === '0') setInitialValue();
        if (input.includes('.') && number === '.') return;
        setInput(input + number);
    }

    function result(number) {
        try {
            setInput(
                String(eval(input)).length > 3 &&
                    String(eval(input)).includes(".")
                    ? String(eval(input).toFixed(4))
                    : String(eval(input))
            );
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>
                {initialValue} {input}
            </h1>
            <div>

                {
                    buttons.numberButtons.map((numberButton, index) => {
                        return (
                            <InputButton key={index} input={numberButton} handleClick={numberButton => { concatenateInput(numberButton) }} />
                        );
                    })
                }


                {
                    buttons.operatorButtons.map((operatorButton, index) => {
                        return (
                            <InputButton key={index} input={operatorButton} handleClick={operatorButton => { concatenateInput(operatorButton) }} />
                        );
                    })
                }

                <div>
                    <InputButton input={"="} handleClick={numberButton => { result(numberButton) }} />
                </div>
            </div>
        </div>
    );

}

export default Calculator;