import React from "react"
import { render, screen } from "@testing-library/react"
import IndexPage from "../../src/pages/index"


test("Checks that pages title is correct",  async() => {

 render(<IndexPage/>);
  await screen.findByRole('heading')
  

  expect(screen.getByRole('heading')).toHaveTextContent('Home Page');
 

});