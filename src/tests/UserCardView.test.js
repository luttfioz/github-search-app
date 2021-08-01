import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { UserCard } from '../components/UserCardView';

describe('UserCardView Tests', () => {

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


  it('renders component', () => {
    act(() => {
      render(<UserCard login="Jack" />, container);
    });
    expect(container.textContent).toContain("Jack");

  });

})
