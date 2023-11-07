import React from "react"
import { render } from "@testing-library/react"
import IndexPage from "../pages/index"


test("Displays the correct title", () => {
  const { getByText } = render(<IndexPage/>);

  const title = getByText("Home");

  expect(title).toBe
})