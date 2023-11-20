import React from "react"
import type { HeadFC } from "gatsby"
import Bio from "../components/bio";
import Navbar from "../components/nav";
import { SEO } from "../components/seo";
import { BioText } from "../content/data.json"
import Footer from "../components/socials";

const IndexPage = () =>{

// https://docs.google.com/forms/d/e/1FAIpQLSfCHRDEFYbuwJ_AO0Mr2wlgFzDs6C8nhw6ncDplNNdJIEwpQA/viewform?usp=pp_url&entry.1588175006=a&entry.1500911423=a&entry.1931597131=a@a.com&entry.43927614=22&entry.142169962=a


  return (
    
    <div className="mx-auto px-6 py-12">
      <Navbar/>
      <div className="mt-10 mx-6 lg:mx-20">
        <h1 className="text-gray-200 text-4xl font-ubuntu font-semibold">
          Hi there!
        </h1>
        <Bio TextContent={BioText}/>
        <Footer/>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
      <>
      <SEO title="Sean Otto" description="Portfolio for Sean Otto"/>
      <body className = "bg-slate-500 dark:bg-slate-800 text-slate-800 dark:text-slate-400 font-ubuntu"></body>
      </>
)
