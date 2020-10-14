import React from "react";
import { render } from "@testing-library/react";
import DropdownMenu from "./DropdownMenu";

describe("DropdownMenu", () => {
  it("renders", () => {
    const list = ["a", "b"];
    const handler = jest.fn();
    const renderComponent = () =>
      render(
        <DropdownMenu list={list} header="HeaderTest" handler={handler} />
      );
    expect(renderComponent).not.toThrow();
  });

  it("displays header", () => {
    const list = ["a", "b"];
    const clickHandler = jest.fn();
    const container = render(
      <DropdownMenu list={list} header="HeaderTest" handler={clickHandler} />
    );
    expect(container.queryByText("HeaderTest")).not.toBeNull();
  });

  xit("displays options", () => {
    throw new Error("Test not implemented");
  });

  xit("displays no dropdown when list in empty", () => {
    throw new Error("Test not implemented");
  });

  xit("clicking on an option calls handler", () => {
    throw new Error("Test not implemented");
  });
});
