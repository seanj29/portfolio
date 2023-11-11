import React from "react"
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo"
import Bio from "../components/bio";
import Navbar from "../components/nav";


const bioText = ` I'm Sean Otto. I'm a software engineer based in the beautiful hills of Surrey, UK. I love developing both games, front end websites and small command line programs.

I'm passionate about emergent-tech, beautiful interfaces and intuitive programming. I also love my gf sooooo much 

To find out more about any of my projects, feel free to select any of the links on the right!`
const IndexPage = () =>{

  return (
    
    <div className="container mx-auto px-6 py-12">
    <Navbar/>
    <Bio TextContent={bioText}/>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
<>
  <SEO />
  <body className = "bg-slate-800 text-slate-400 font-ubuntu"></body>
  </>
)
