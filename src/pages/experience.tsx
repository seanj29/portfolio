import React from "react";
import type { HeadFC } from "gatsby"
import { SEO } from "../components/seo";
import Navbar from "../components/nav";
import ExperienceCard from "../components/ExperienceCard";
import { Experiences } from "../content/data.json"



const ExperiencePage = () => {
    return(    
        <div className="mx-auto px-6 py-12">
            <Navbar/>
            <div className="mt-20 ml-6 lg:ml-15 max-w-screen-2xl">
                <ol id="ExperienceList">
                    {Experiences
                    .map(experience => 
                    (

                        <ExperienceCard title={experience.title} date={experience.date} otherRoles={experience.otherRoles} desc={experience.desc}/>

                    )
                    )
                    }
                </ol>
                <a href="../../resume.pdf" className="block ml-96 font-semibold text-lg hover:text-white hover:underline">
                            View Full Résumé
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-block -mb-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="inline-block mb-4 -ml-1" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" clip-rule="evenodd"/>
                        </svg>
                        
                </a>
            </div>
        </div>
    )
}

export const Head: HeadFC = () => (
    <>
    <SEO title="Experience Page" description="All the relevant places I've worked" />
    <body className = "bg-slate-500 dark:bg-slate-800 text-slate-800 dark:text-slate-400 font-ubuntu"></body>
    </>
)

export default ExperiencePage
