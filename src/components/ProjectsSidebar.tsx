import React from "react"

type SidebarProps = {
    styles: string;
}

const ProjectsSidebar = ({styles}:SidebarProps) =>{


    return (
    <nav className={styles}>
        <ul className="flex flex-col">
            <li className="mt-4 mb-4">
                <a href="#web"  className="transition-none hover:text-white hover:underline">
                    Web Development
                </a>
            </li>
            <li className="mb-4">
                <a href="#game" className="transition-none hover:text-white hover:underline">
                    Game Development
                </a>
            </li>
            <li className="mb-4">
                <a href="#misc" className="transition-none hover:text-white hover:underline">
                    Misc Programming
                </a>
            </li>
        </ul>
    </nav>

    )
  }

export default ProjectsSidebar

