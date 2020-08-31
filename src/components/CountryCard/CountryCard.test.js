import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryCard from "./CountryCard";

test("renders component", async () => {
  const { getByTestId } = render(<CountryCard />);
  expect(getByTestId(/country-card/i)).toBeInTheDocument();
});
