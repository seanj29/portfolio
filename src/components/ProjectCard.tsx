import React from "react"

const ProjectCard = () =>{

   /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>
  
  svg for document
  */
  
    return (
      <div className="mx-auto w-48 flex">
        <div>

        </div>
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold font-ubuntu">
            Temp project
          </h2>
          <p>
          Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally
          </p>
          <button>
            Link button yaay!
          </button>
        </div>
      </div>
    )
  }

export default ProjectCard