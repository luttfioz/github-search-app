import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import { store } from '../store/store';

import GithubSearchAppView from "../components/GithubSearchAppView";

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
            <GithubSearchAppView />
        </Provider>, container);
    });
    expect(container).toBeTruthy();

});
