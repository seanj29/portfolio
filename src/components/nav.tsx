import { Link } from "gatsby"
import React from "react"
import Header from "./header"
const Navbar = () =>{

    return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-slate-900 position lg:sticky lg:top-2">
        <div>
            <Header/>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-slate-400 border-gray-600 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
        <div className="w-full justify-center block text-3xl lg:text-xl mt-4 flex lg:w-auto lg:justify-end">
            <ul className="block divide-y-2 lg:divide-y-0 lg:divide-x-2">
                <li className="lg:inline-block lg:ml-2">
                    <Link to="#" className="hover:text-white hover:underline">
                        About
                    </Link>
                </li>
                <li className="lg:inline-block lg:ml-2">
                    <Link to="#" className="hover:text-white hover:underline">
                        Experience
                    </Link>
                </li>
                <li className="lg:inline-block lg:ml-1">
                    <Link to="#" className="hover:text-white hover:underline">
                        Projects
                    </Link>
                </li>
                <li className="lg:inline-block lg:ml-1">
                    <Link to="#" className="hover:text-white hover:underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

    </nav>

    )
  }

export default Navbar