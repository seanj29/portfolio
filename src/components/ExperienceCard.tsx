import React from "react"

type ExperienceProps = {
  
  title:string
  otherRoles?: string
  date:string,
  desc: string,

}



const ExperienceCard = (props: ExperienceProps) =>{
    const { title, date, otherRoles, desc } = props
    
      return (
        <li className="grid sm:grid-cols-8 mb-10 sm:gap-8 md:gap-4">
         <header className="font-semibold text-2xl uppercase text-slate-500 sm:col-span-2">
          {date}
         </header>
         <div className="sm:col-span-6">
          <h3 className="text-3xl text-slate-200">
            {title}
          </h3>
          {otherRoles && <p className="my-2 text-xl">{otherRoles} </p>}
          <p className="mt-1 text-lg whitespace-pre-line">
          {desc}
          </p>
         </div> 
        </li>
      )
    }
  
  export default ExperienceCard