import React from "react";
import { render, screen } from "@testing-library/react";
import { VideoInfo } from "./VideoInfo";

describe("VideoInfo", () => {
  test("renders VideoInfo component", () => {
    const videoMetaData = {
      title: "Lorem Ipsum Dolor",
      description: "Sit amet et alienum...",
    };
    render(<VideoInfo {...{ videoMetaData }} />);

    expect(screen.getByText("Lorem Ipsum Dolor")).toBeInTheDocument();
    expect(screen.getByText("Sit amet et alienum...")).toBeInTheDocument();
  });
});
