import React from "react";
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo";
import Navbar from "../components/nav";
import ProjectCard from "../components/ProjectCard";
import ProjectsSidebar from "../components/ProjectsSidebar";



const ProjectsPage = () => {
    return(    
        <div className="mx-auto px-6 py-12">
        <Navbar/>
        <div className="flex mt-20 lg:mx-20">
        <ProjectCard/>
        <ProjectsSidebar/>
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
