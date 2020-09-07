import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import {
  getByText,
  getByTestId
} from '@testing-library/dom';
import Calculator from '../components/Calculator';


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


it("renders without crashing: Calculator", () => {
  render(<Calculator />, container);
})

it("testing sum operator", () => {

  act(() => {
    render(<Calculator />, container);
  });
  
  mathOperation("1", "+", "5");

  expect(getByTestId(container, "screen")).toHaveTextContent("6");
  
});

it("testing multiplication operator", () => {

  act(() => {
    render(<Calculator />, container);
  });
  
  mathOperation("4", "*", "2");

  expect(getByTestId(container, "screen")).toHaveTextContent("8");
  
});



it("testing 5/0 case", () => {

  act(() => {
    render(<Calculator />, container);
  });

  jest.spyOn(window, "alert").mockImplementation(() => {});

  mathOperation("5", "/", "0");

  expect(getByTestId(container, "screen")).toHaveTextContent("5/0");
  
  expect(window.alert).toBeCalledWith("Math error, please try again with another input");
});


it("testing 5/0 case", () => {

  act(() => {
    render(<Calculator />, container);
  });

  jest.spyOn(window, "alert").mockImplementation(() => {});

  mathOperation("*", "/", "+");

  expect(getByTestId(container, "screen")).toHaveTextContent("*/+");
  
  expect(window.alert).toBeCalledWith("Input format error, please try again with another input");
});


const mathOperation = (n1, operator, n2) => {
  // Get elements by their text, just like a real user does.
  getByText(container, n1).click();
  getByText(container, operator).click();
  getByText(container, n2).click();
  getByText(container, "=").click();
}