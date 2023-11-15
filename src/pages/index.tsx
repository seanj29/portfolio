import React from "react"
import type { HeadFC } from "gatsby"
import Bio from "../components/bio";
import Navbar from "../components/nav";
import { SEO } from "../components/seo";


const bioText = ` I'm Sean Otto, a software engineer based in the beautiful hills of Surrey, UK. 

I love developing games, front end websites and small command line programs.

I'm passionate about emergent-tech, beautiful interfaces and intuitive programming. I also love my gf sooooo much 

To find out more about any of my projects, feel free to select any of the links on the right!`
const IndexPage = () =>{

  return (
    
    <div className="mx-auto px-6 py-12">
    <Navbar/>
    <div className="mt-20 mx-10 lg:mx-20">
      <h1 className="text-gray-200 text-4xl font-ubuntu font-semibold">
        Hi there!
      </h1>
      <Bio TextContent={bioText}/>
    </div>
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
