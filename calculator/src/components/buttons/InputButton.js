import React from "react";

import "../../assets/css/calculator.css";


//InputButtons => numbers, point and operators
const InputButton = ({handleClick, input, buttonStyle}) => {
    return (
    <button type="button" className={buttonStyle} value={input} onClick={() => handleClick(input)}>
        {input}
    </button>
    );
}


export default InputButton;