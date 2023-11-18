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
            </div>
        </div>
    )
}

export const Head: HeadFC = () => (
    <>
    <SEO title="Experience Page" />
    <body className = "bg-slate-500 dark:bg-slate-800 text-slate-800 dark:text-slate-400 font-ubuntu"></body>
    </>
)

export default ExperiencePage
