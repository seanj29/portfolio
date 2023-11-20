import React from "react"
import type { HeadFC } from "gatsby"
import Navbar from "../components/nav";
import { SEO } from "../components/seo";


const ContactPage = () =>{

  return (
    
    <div className="mx-auto px-6 py-12">
      <Navbar/>
      <div className="mt-10 mx-6 lg:mx-20">
      <form>
        <label>
          Name: test
          <input type="text" value=""/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    </div>
  )
}

export default ContactPage

export const Head: HeadFC = () => (
      <>
      <SEO title="Contact Form" description="Portfolio for Sean Otto"/>
      <body className = "bg-slate-500 dark:bg-slate-800 text-slate-800 dark:text-slate-400 font-ubuntu"></body>
      </>
)
