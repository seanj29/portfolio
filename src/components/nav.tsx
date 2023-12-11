import { Link } from "gatsby"
import React, { useState } from "react"
import Header from "./header"



const Navbar = () =>{
    
    const [nav, showNav] = useState(false)

    return (
    <nav className="flex rounded-lg items-center justify-between flex-wrap p-6 bg-slate-200 dark:bg-slate-900 lg:rounded-none lg:sticky lg:top-0">
        <div>
            <Header/>
        </div>
        <div className="block lg:hidden">
        <span className="sr-only">Open main menu</span>
            <button onClick={() => showNav(!nav)} className="flex items-center px-3 py-2 border rounded text-black border-gray-600 hover:text-gray-800 hover:border-gray-600 dark:text-slate-400 dark:hover:text-white dark:hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div className={`mt-4 flex w-full justify-start lg:block text-3xl lg:text-xl lg:w-auto lg:justify-end ${ nav ? " block": "hidden" }`}>
            <ul className="block divide-y divide-current lg:divide-y-0">
                <li className="py-2 lg:py-0 lg:inline-block lg:border-l lg:px-2">
                    <Link to="/" activeClassName="text-blue-600 dark:text-teal-600" className="hover:text-blue-600 dark:hover:text-white hover:underline">
                        Home
                    </Link>
                </li>
                <li className="py-2 lg:py-0 lg:inline-block lg:border-l lg:px-2">
                    <Link to="/experience" activeClassName="text-blue-600 dark:text-teal-600" className="hover:text-blue-600 dark:hover:text-white hover:underline">
                        Experience
                    </Link>
                </li>
                <li className="py-2 lg:py-0 lg:inline-block lg:border-l lg:px-2">
                    <Link to="/projects" activeClassName="text-blue-600 dark:text-teal-600" className="hover:text-blue-600 dark:hover:text-white hover:underline">
                        Projects
                    </Link>
                </li>
                <li className="pt-2 lg:pt-0 lg:inline-block lg:border-x lg:px-2">
                    <Link to="/contact" activeClassName="text-blue-600 dark:text-teal-600" className="hover:text-blue-600 dark:hover:text-white hover:underline">
                        Contact Me
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
    )
  }

export default Navbar