import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import { store } from '../store/store';

import { GithubFormViewContainer } from "../containers/GithubFormViewContainer";

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


it("renders with store", () => {
    act(() => {
        render(<Provider store={store}>
            <GithubFormViewContainer />
        </Provider>, container);
    });
    expect(container.textContent).toContain("User");

});
