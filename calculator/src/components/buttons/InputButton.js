import React from "react";




//InputButtons => numbers, point and operators
const InputButton = ({handleClick, input, style}) => {
    return (
    <button class={style} value={input} onClick={() => handleClick(input)}>
        {input}
    </button>
    );
}


export default InputButton;