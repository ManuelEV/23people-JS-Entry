import React from "react";
import { render } from "react-dom";
import InputButton from '../components/buttons/InputButton';




it("renders without crashing: Button", () => {
    const div = document.createElement("div");
    render(<InputButton input="1" value="1" onClick={() => function test() {}} />, div);
    
})
