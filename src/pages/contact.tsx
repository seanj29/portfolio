// https://docs.google.com/forms/d/e/1FAIpQLSfCHRDEFYbuwJ_AO0Mr2wlgFzDs6C8nhw6ncDplNNdJIEwpQA/viewform?usp=pp_url&entry.1588175006=a&entry.1500911423=a&entry.1931597131=a@a.com&entry.43927614=22&entry.142169962=a
import React from "react";
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo";
import Navbar from "../components/nav";



const ContactPage = () => {
    return(    
      <div className="mx-auto px-6 py-12">
      <Navbar/>
      <div className="mt-10 mx-6 lg:mx-20">
      <form action="#" className="space-y-8">
        <div>
            <label>
            Name:
            <input type="text" value=""/>
          </label>
        </div>
      </form>
      </div>
    </div>
    )
}

export const Head: HeadFC = () => (
    <>
    <SEO title="Contact Page"  description="Form for contacting me"/>
    <body className = "bg-slate-500 dark:bg-slate-800 text-slate-800 dark:text-slate-400 font-ubuntu"></body>
    </>
)

export default ContactPage;





