import React from "react";
<<<<<<< Updated upstream
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import InputButton from '../components/buttons/InputButton';


let container = null;

beforeEach(() => {
  // set up a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing: Button", () => {
    render(<InputButton input="1" value="1" onClick={() => function test() {}} />, container);
})

it("check button content", () => {

  act(() => {
    render(<InputButton input="1" value="1" onClick={() => function test() {}} />, container);
  });
  expect(container.textContent).toBe("1");
  
});

=======
import { render } from "react-dom";
import InputButton from '../components/buttons/InputButton';




it("renders without crashing: Button", () => {
    const div = document.createElement("div");
    render(<InputButton input="1" value="1" onClick={() => function test() {}} />, div);
    
})
>>>>>>> Stashed changes
