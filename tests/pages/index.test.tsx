import React from "react"
import { render, screen } from "@testing-library/react"
import IndexPage from "../../src/pages";


// test("Checks that pages title is correct",  async() => {

  // render(<title>Home Pge</title>);
  // await screen.findByRole('title')
  

//   expect(screen.getByRole('title')).toHaveTextContent('Sean Otto');
 

// });

test(" My Name is present and in the center", () => {
  render(<IndexPage/>)
  const headings = screen.getAllByRole("heading");
});