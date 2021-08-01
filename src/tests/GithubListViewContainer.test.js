import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from 'react-redux';
import { store } from '../store/store';

import { GithubListViewContainer } from "../containers/GithubListViewContainer";

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
            <GithubListViewContainer />
        </Provider>, container);
    });
    expect(container).toBeTruthy();

});
