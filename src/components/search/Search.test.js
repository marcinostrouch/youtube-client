import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { Search } from "./Search";
import { mockStore } from "../../utilities/tests/mockStore";

describe("Search", () => {
  test("renders Search component", () => {
    const { unmount } = render(
      <Provider store={mockStore}>
        <Search />
      </Provider>
    );

    const searchInputEl = screen.getByPlaceholderText("Search");
    expect(searchInputEl).toBeInTheDocument();

    unmount();
  });

  test("renders user text input", () => {
    const { unmount } = render(
      <Provider store={mockStore}>
        <Search />
      </Provider>
    );
    expect(screen.queryByDisplayValue("lorem ipsum")).toBeNull();

    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "lorem ipsum" },
    });

    expect(screen.getByDisplayValue("lorem ipsum")).toBeInTheDocument();

    unmount();
  });
});
