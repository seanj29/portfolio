import React from "react";
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo";
import Navbar from "../components/nav";



const ProjectsPage = () => {
    return(    
        <div className="container mx-auto px-6 py-12">
        <Navbar/>
        <div className="mt-20 mx-10 lg:mx-20">
        </div>
        </div>
    )
}

export const Head: HeadFC = () => (
    <>
    <SEO title="Projects" />
    <body className = "bg-slate-800 text-slate-400 font-ubuntu"></body>
    </>
)

export default ProjectsPage
