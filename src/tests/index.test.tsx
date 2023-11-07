import React from "react"
import { render } from "@testing-library/react"
import IndexPage from "../pages/index"


test("Displays the correct title", () => {
  const { getByTestId } = render(<IndexPage/>);

  const title = getByTestId("Home");
  expect(title).toBeVisible(); 
  throw new Error;
});