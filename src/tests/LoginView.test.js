import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent } from '@testing-library/react'

import LoginView from '../components/LoginView';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

function handleChange(event) {
  console.log(event);
}

it("renders with setToken for valid", () => {
  const setToken = jest.fn();
  act(() => {
    render(<LoginView checked={true} setToken={setToken} />, container);
  });
  expect(container.textContent).toContain("Github Search App Login PageLogin from here to access.");


  const email = document.querySelector("[data-testid=email]");
  fireEvent.change(email, { target: { value: 'jack@google.com' } })

  const pass = document.querySelector("[data-testid=password]");
  fireEvent.change(pass, { target: { value: 'jack123' } })


  const button = document.querySelector("[data-testid=login]");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(setToken).toHaveBeenCalledTimes(1);
});


it("renders with setToken for invalid", () => {
  const setToken = jest.fn();
  act(() => {
    render(<LoginView checked={true} setToken={setToken} />, container);
  });
  expect(container.textContent).toContain("Github Search App Login PageLogin from here to access.");


  const email = document.querySelector("[data-testid=email]");
  fireEvent.change(email, { target: { value: 'jack' } })

  const pass = document.querySelector("[data-testid=password]");
  fireEvent.change(pass, { target: { value: '123' } })


  const button = document.querySelector("[data-testid=login]");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(setToken).toHaveBeenCalledTimes(1);
});