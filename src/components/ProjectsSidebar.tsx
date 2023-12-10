import React from "react"

type SidebarProps = {
    styles: string;
}

const ProjectsSidebar = ({styles}:SidebarProps) =>{


    return (
    <nav className={styles}>
        <ul className="flex flex-col  divide-y divide-current">
            <li className="mt-4 mb-4">
                <a href="#WebDev"  className="hover:text-blue-600 dark:hover:text-white hover:underline">
                    Web Development
                </a>
            </li>
            <li className="mb-4 pt-2">
                <a href="#GameDev" className="hover:text-blue-600 dark:hover:text-white hover:underline">
                    Game Development
                </a>
            </li>
            <li className="mb-4 pt-2">
                <a href="#MiscDev" className="hover:text-blue-600 dark:hover:text-white hover:underline">
                    Misc Programming
                </a>
            </li>
        </ul>
    </nav>

    )
  }

export default ProjectsSidebar

