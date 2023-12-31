import React from "react";
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo";
import Navbar from "../components/nav";
import ProjectCard from "../components/ProjectCard";
import ProjectsSidebar from "../components/ProjectsSidebar";
import { Projects } from "../content/data.json";



const ProjectsPage = () => {
    return(    
        <div className="mx-auto px-6 py-12">
            <Navbar/>
            <div className="flex mt-20 lg:mx-20">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <h1 className="self-center text-black dark:text-white font-ubuntu text-3xl lg:text-4xl font-bold mb-4">
                            Web Development Projects
                        </h1>
                        <ul id="WebDev">
                            {Projects
                            .filter((project) => 
                            (
                                project.tag === "web"
                            )
                            )
                            .map((project) => 
                            (
                                <ProjectCard title={project.title} imagekey={project.imagekey} desc={project.desc} githubURL={project.githubURL} deployURL={project.deployURL} tag ={project.tag}/>
                            )
                            )
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="self-center text-black dark:text-white font-ubuntu text-3xl lg:text-4xl font-bold mb-4">
                            Game Development Projects
                        </h1>
                        <ul id ="GameDev">
                            {Projects
                            .filter((project) => 
                            (
                                project.tag === "game"
                            )
                            )
                            .map((project) => 
                            (
                                <ProjectCard title={project.title} imagekey={project.imagekey} desc={project.desc} githubURL={project.githubURL} itchURl={project.itchURl} tag ={project.tag}/>
                            )
                            )
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="self-center text-black dark:text-white font-ubuntu text-3xl lg:text-4xl font-bold mb-4">
                            Other Development Projects
                        </h1>
                        <ul id ="MiscDev">
                            {Projects
                            .filter((project) => 
                            (
                                project.tag === "misc"
                            )
                            )
                            .map((project) => 
                            (
                                <ProjectCard title={project.title} imagekey={project.imagekey} desc={project.desc} githubURL={project.githubURL} tag ={project.tag}/>
                            )
                            )
                            }
                        </ul>
                    </div>
                </div>
                <ProjectsSidebar styles="mx-auto w-fit h-auto hidden lg:contents"/>
            </div>              
        </div>
    )
}

export const Head: HeadFC = () => (
    <>
    <SEO title="Projects" description="Short Showcase of my past projects" />
    <body className = "bg-white dark:bg-slate-800 text-black dark:text-slate-400 font-ubuntu"></body>
    </>
)

export default ProjectsPage
