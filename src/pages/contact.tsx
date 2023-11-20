import React from "react"
import type { HeadFC } from "gatsby"
import Bio from "../components/bio";
import Navbar from "../components/nav";
import { SEO } from "../components/seo";
import { BioText } from "../content/data.json"
import Footer from "../components/socials";

const FormPage = () =>{

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

export default FormPage

export const Head: HeadFC = () => (
      <>
      <SEO title="Contact Form" description="Portfolio for Sean Otto"/>
      <body className = "bg-slate-500 dark:bg-slate-800 text-slate-800 dark:text-slate-400 font-ubuntu"></body>
      </>
)
