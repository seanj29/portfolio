import React from "react"
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo"
import Header from "../components/header";
import Bio from "../components/bio";


const bioText = ` I'm Sean Otto. I'm a software engineer based in the beautiful hills of Surrey, UK. I love developing both games, front end websites and small command line programs.

I'm passionate about emergent-tech, beautiful interfaces and intuitive programming.

To find out more about any of my projects, feel free to select any of the links on the right!`
const IndexPage = () =>{

  return (
    
    <div className="container mx-auto px-6 py-12">
    <Header/>
    <Bio TextContent={bioText}/>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
<>
  <SEO />
  <body className = "bg-teal-950 text-teal-400 font-ubuntu"></body>
  </>
)
