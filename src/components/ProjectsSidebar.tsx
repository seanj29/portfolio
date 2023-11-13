import { Link } from "gatsby"
import React from "react"

const ProjectsSidebar = () =>{

    return (
    <nav className="inline-block items-center justify-between flex-wrap p-6">
            <ul className="inline-block list-none">
                <li className="mt-4 mb-4 lg:inline-block lg:mr-2 lg:my-0">
                    <a href="#Web"  className="transition-none hover:text-white hover:underline">
                        Web Development
                    </a>
                </li>
                <li className="mb-4 lg:inline-block lg:mr-2">
                    <a href="#Game" className="transition-none hover:text-white hover:underline">
                        Game Development
                    </a>
                </li>
                <li className="mb-4 lg:inline-block lg:mr-2">
                    <a href="#Misc" className="transition-none hover:text-white hover:underline">
                        Misc Programming
                    </a>
                </li>
            </ul>
    </nav>

    )
  }

export default ProjectsSidebar

