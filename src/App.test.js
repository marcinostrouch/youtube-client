import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { mockStore } from "./utilities/tests/mockStore";

describe("App", () => {
  test("renders App component", () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
  });
});
