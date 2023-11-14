import React from "react"

const ProjectsSidebar = () =>{

    return (
    <nav className="flex flex-col p-6">
            <ul className="flex flex-col">
                <li className="mt-4 mb-4 lg:inline-block lg:mr-2 lg:my-0">
                    <a href="#web"  className="transition-none hover:text-white hover:underline">
                        Web Development
                    </a>
                </li>
                <li className="mb-4 lg:inline-block lg:mr-2">
                    <a href="#game" className="transition-none hover:text-white hover:underline">
                        Game Development
                    </a>
                </li>
                <li className="mb-4 lg:inline-block lg:mr-2">
                    <a href="#misc" className="transition-none hover:text-white hover:underline">
                        Misc Programming
                    </a>
                </li>
            </ul>
    </nav>

    )
  }

export default ProjectsSidebar

